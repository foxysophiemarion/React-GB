import React from 'react';
import './App.css';
import Message from './component/Message';
import someImg from "./img/cover.png";
function App() {
	return (
		<div className="App">
			<Message text="Ваша задача в статусе 'ПУ-ПУ-ПУ'" />
			<Message text="Ожидайте..." />
			<img src={someImg} alt="Cover" />
		</div>
	);
}

export default App;
