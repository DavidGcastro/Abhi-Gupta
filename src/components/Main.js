import React from 'react';
import 'animate.css';
import About from './About';
import Section from '../HOC/Section';
import Publications from './Publications';
import Projects from './Projects';

const Main = () => {

	return (
		<div className='main-parent'>
			<div id='global-wrapper'>
				<Section> 
					<About/>
				</Section>
				<Section>
					<Publications/>
				</Section>
				<Section>
					<Projects/>
				</Section>
			</div>
		</div>	
	);
};


export default Main;