import 'animate.css';
import About from './About';
import Section from '../HOC/Section';
import Projects from './Projects';
import Research from './ResearchExperience';
import React, {Component}  from 'react';
import Nav from './Nav';
import Fixed from './Fixed';
import Experience from './Experience';
class Main extends Component {
	constructor(){
		super();
		this.state = {
			activeTab: 'about',
			isNavVisible: false
		};
		this.setActiveTab = this.setActiveTab.bind(this);
		this.showNav = this.showNav.bind(this);
	}
	setActiveTab(active){
		this.setState({activeTab: active});
	}
	showNav(){
		this.setState((prevState) => 
		{
			return {isNavVisible: !prevState.isNavVisible};
		}
		);
	}
	render(){ 
		return (
			<div className='main-parent'>
				<div id='global-wrapper'>
					<div className='main-content padder'>
						<Fixed showNav={this.showNav} isNavVisible={this.state.isNavVisible}/>
						<Section setActiveTab = {this.setActiveTab} tabName='about'>
							<About/>
						</Section>
						<Section setActiveTab = {this.setActiveTab} tabName='research'>
							<Research/>
						</Section>
						<Section setActiveTab = {this.setActiveTab} tabName='projects'>
							<Projects/>
						</Section>
						<Section setActiveTab = {this.setActiveTab} tabName='experience'>
							<Experience/>
						</Section>
					</div>
					<Nav activeTab={this.state.activeTab} isNavVisible={this.state.isNavVisible}  showNav={this.showNav}/>
				</div>
			</div>	
		);
	}
}





export default Main;