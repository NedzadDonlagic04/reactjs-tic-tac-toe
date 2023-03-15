import PropTypes from 'prop-types';
import TicTacToeBoard from './components/TicTacToeBoard';

function App(props) {
	return (
		<>
			<h1 className='tic-tac-toe-title'>{props.title}</h1>
			<TicTacToeBoard />
		</>
	);
}

App.propTypes = {
	title: PropTypes.string.isRequired
}

export default App;