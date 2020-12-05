import 'animate.css';
import About from './About';
import Section from '../HOC/Section';
import Publications from './Publications';
import Projects from './Projects';
import React, {Component}  from 'react';
import Nav from './Nav';
import Fixed from './Fixed';
import Experience from './Experience';
import Contact from './Contact';
class Main extends Component {
	constructor(){
		super();
		this.state = {
			activeTab: ''
		};
	}
	render(){
		return (
			<div className='main-parent'>
				<div id='global-wrapper'>
					<div className='main-content padder'>
						<Fixed/>
						<Section>
							<About/>
						</Section>
						<Section>
							<Publications/>
						</Section>
						<Section>
							<Projects/>
						</Section>
						<Section>
							<Experience/>
						</Section>
						<Section>
							<Contact/>
						</Section>
					</div>
					<Nav/>
				</div>
			</div>	
		);
	}
}





export default Main;