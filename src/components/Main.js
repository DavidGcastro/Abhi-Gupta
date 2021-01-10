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
			isNavVisible: false,
			padHeight: 0,
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
	componentDidMount(){
		const fixed = Number(getComputedStyle(document.getElementsByClassName('fixed-parent')[0]).height.replace('px', ''));
		this.setState({padHeight: fixed});	
		window.addEventListener('resize', () => {
			const fixed = Number(getComputedStyle(document.getElementsByClassName('fixed-parent')[0]).height.replace('px', ''));
			this.setState({padHeight: fixed});
		}, false);
	}
	render(){ 
		return (
			<div className='main-parent'>
				<div id='global-wrapper'>
					<div className='main-content padder'>
						<Fixed showNav={this.showNav} isNavVisible={this.state.isNavVisible} padHeight={this.state.padHeight}/>
						<Section setActiveTab = {this.setActiveTab} tabName='about' padHeight={this.state.padHeight} partialVisPos={'top'}>
							<About/>
						</Section>
						{ /*Setting minTopValue since research top is shown before we adjust the fixed header height buffer*/}
						<Section setActiveTab = {this.setActiveTab} tabName='research' padHeight={this.state.padHeight} minTopValue={50}>
							<Research/>
						</Section>
						<Section setActiveTab = {this.setActiveTab} tabName='projects' padHeight={this.state.padHeight} partialVisPos={true}>
							<Projects/>
						</Section>
						{/* <Section setActiveTab = {this.setActiveTab} tabName='experience' padHeight={this.state.padHeight}>
							<Experience/>
						</Section> */}
					</div>
					<Nav activeTab={this.state.activeTab} isNavVisible={this.state.isNavVisible}  showNav={this.showNav}/>
				</div>
			</div>	
		);
	}
}





export default Main;