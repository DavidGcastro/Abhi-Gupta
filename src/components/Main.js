import React from 'React';
import MainHeader from './mainHeader/index.js';
import Experience from './experience/index';
import About from './about/index';
const Main = () => {
	return (
		<div className='main-parent'>
			<MainHeader/>
			<About/>
			<Experience/>
		</div>
		
	);
};

export default Main;
