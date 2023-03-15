import { useState } from 'react';
import './TicTacToeBoard.css';

function TicTacToeBoard() {
	const [board, boardSetter] = useState(Array.from({ length: 9 }, () => ''));
	const [sign, signSetter] = useState('O');

	const boardOnClick = e => {
		const index = Number(e.target.getAttribute('data-id'));

		signSetter((sign === 'X')? 'O' : 'X');

		boardSetter(board.map( (val, i) => {
			if(index === i && val === '') return sign;
			return val;
		}));
	}

	return (
		<div className="tic-tac-toe-board" onClick={boardOnClick}>
			{board.map((val, i) => (
				<button key={i} data-id={i} className='piece'>{val}</button>
			))}
		</div>
	);
}

export default TicTacToeBoard;