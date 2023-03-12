import PropTypes from 'prop-types';

function App(props) {
	return (
		<h1>{props.title}</h1>
	);
}

App.propTypes = {
	title: PropTypes.string.isRequired
}

export default App;