import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App title='Tic Tac Toe'/>
	</React.StrictMode>,
);


const link = document.querySelector('link[rel="icon"]');

if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    link.href = '/tic-tac-toe-icon-light.png';
}