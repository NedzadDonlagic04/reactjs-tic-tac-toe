import { useEffect, useState } from 'react';
import './TicTacToeBoard.css';

function TicTacToeBoard() {
	const [board, boardSetter] = useState(Array.from({ length: 9 }, () => {
											return { sign: '', classes: 'piece' };
										})),
		  [sign, signSetter] = useState('X'),
		  [playable, playableSetter] = useState(true),
		  [boardUsed, boardUsedSetter] = useState(false);

	const winningBoard = (a, b, c) => {
		board[a].classes += ' win';
		board[b].classes += ' win';
		board[c].classes += ' win';

		for(let i=0; i<board.length; i++) {
			if(i === a || i === b || i === c) continue;

			board[i].classes += ' lose';
		}

		playableSetter(false);
	}

	const boardCheck = () => {
		for(let i=0; i<7; i+=3) if(board[i].sign === sign && board[i+1].sign === sign && board[i+2].sign === sign) winningBoard(i, i+1, i+2);
		for(let i=0; i<3; i++) if(board[i].sign === sign && board[i+3].sign === sign && board[i+6].sign === sign) winningBoard(i, i+3, i+6);

		if(board[0].sign === sign && board[4].sign === sign && board[8].sign === sign) winningBoard(0, 4, 8);
		else if(board[2].sign === sign && board[4].sign === sign && board[6].sign === sign) winningBoard(2, 4, 6);

		signSetter((sign === 'X')? 'O' : 'X');

		boardUsedSetter(false);
	}

	const boardOnClick = e => {
		const index = Number(e.target.getAttribute('data-id'));

		if(board[index].sign !== '' || !playable || boardUsed) return;

		boardUsedSetter(true);

		boardSetter(board => board.map( (val, i) => {
			if(index === i && val.sign === '') return { sign: sign, classes: 'piece' };
			return val;
		}));
	}

	useEffect(() => {
		boardCheck();
	}, [board]);

	return (
		<div className="tic-tac-toe-board" onClick={boardOnClick}>
			{board.map((val, i) => (
				<button key={i} data-id={i} className={val.classes}>{val.sign}</button>
			))}
		</div>
	);
}

export default TicTacToeBoard;