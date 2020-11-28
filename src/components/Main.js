import React, {Component} from 'react';
import 'animate.css';
import About from './About';
import Experience from '../components/Experience';
import Section from '../HOC/Section';
import Header from './Header';
import Publications from './Publications';
import Contact from './Contact';
class Main extends Component {
	constructor(){
		super();
	}
	
	render(){
		return (
			<div className='main-parent'>
				<Header/>
				<div id='global-wrapper'>
					<Section>
						<About/>
					</Section>
					<Section>
						<Experience/>
					</Section>
					<Section>
						<Publications/>
					</Section>
					<Section>
						<Contact/>
					</Section>
				</div>
			</div>	
		);
	}

}

export default Main;