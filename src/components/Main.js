import React from 'react';
import 'animate.css';
import About from './About';
import Experience from '../components/Experience';
import Section from '../HOC/Section';
import Header from './Header';
import Publications from './Publications';
import Contact from './Contact';
import Projects from './Projects';

const Main = () => {

	return (
		<div className='main-parent'>
			<Header/>
			<div id='global-wrapper'>
				<Section minTopValue= {50}> 
					<About/>
				</Section>
				<Section>
					<Experience/>
				</Section>
				<Section>
					<Publications/>
				</Section>
				<Section>
					<Projects/>
				</Section>
				<Section>
					<Contact/>
				</Section>
			</div>
		</div>	
	);
};


export default Main;