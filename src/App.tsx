import React from 'react';
import Global from './components/Global';
import { HeaderC } from './components/header/HeaderC';
import { HomeC } from './components/home/HomeC';

function App() {
	return (
		<div className='App'>
			<Global />
			<HeaderC/>
			<HomeC/>
		</div>
	);
}

export default App;
