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
			activeTab: 'about'
		};
		this.setActiveTab = this.setActiveTab.bind(this);
	}
	setActiveTab(active){
		this.setState({activeTab: active});
	}
	render(){
		return (
			<div className='main-parent'>
				<div id='global-wrapper'>
					<div className='main-content padder'>
						<Fixed/>
						<Section setActiveTab = {this.setActiveTab} tabName='about'>
							<About/>
						</Section>
						<Section setActiveTab = {this.setActiveTab} tabName='publications'>
							<Publications/>
						</Section>
						<Section setActiveTab = {this.setActiveTab} tabName='projects'>
							<Projects/>
						</Section>
						<Section setActiveTab = {this.setActiveTab} tabName='experience'>
							<Experience/>
						</Section>
						<Section setActiveTab = {this.setActiveTab} tabName='contact'>
							<Contact/>
						</Section>
					</div>
					<Nav activeTab={this.state.activeTab}/>
				</div>
			</div>	
		);
	}
}





export default Main;