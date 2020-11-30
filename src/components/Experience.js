import React, {Component}  from 'react';
import experienceTemplate from '../../template/experienceTemplate';
const experienceHeaderText = experienceTemplate.title;
const experienceCol1 = experienceTemplate.modules.slice(0,experienceTemplate.modules.length /2);
const experienceCol2 = experienceTemplate.modules.slice(experienceTemplate.modules.length /2);
import closeButton from '../../assets/icons/close.png';
class Experience extends Component {
	constructor(){
		super();
		this.state = {
			activeTab: null,
			hideTabs: false,
			currentTabData: null

		};
		this.tabOnClick = this.tabOnClick.bind(this);
		this.uponTabSelect = this.uponTabSelect.bind(this);
		this.currentTabData = this.currentTabData.bind(this);
		this.handleclose = this.handleclose.bind(this);
	}	

	tabOnClick(e){
		this.setState({
			hideTabs: true,
			activeTab: e.target.getAttribute('data-tab')
		});
		this.uponTabSelect();
		this.currentTabData(e.target.getAttribute('data-tab'));

	}
	uponTabSelect(){
		setTimeout(function(){
			const elemTabs = document.getElementsByClassName('experience-tab-parent')[0];
			elemTabs.classList.add('displayNone');
		}, 300);
	}
	currentTabData(target){
		const data = experienceTemplate.modules.filter((module) => {
			return module.title === target;
		})[0];
		this.setState({currentTabData: data});
	}
 
	handleclose(){
		this.setState({hideTabs: false, activeTab: null});
	}
	render(){
		return (
			<div className='component-parent padder' id={experienceHeaderText}>
				<div className='component-wrapper smallerMinHeight'>
					<span className={`large-text white uppercase letter-spacer header boldish hideElem  ${this.props.isViz ? 'animate__animated animate__fadeInDown  showElem' : ''}`}>{experienceHeaderText}</span>	
					<div className = {`experience-tab-parent ${this.state.hideTabs ? 'animate__animated animate__fadeOut animate_slow': 'animate__animated animate__fadeIn  animate__slow'}`}>
						<div className='experience-tab-left experience-col'>
							{experienceCol1.map((experience, i) => {
								return <div className='experience-tab' key={i} data-tab={experience.title} onClick = {this.tabOnClick}>
									<span className='white p uppercase boldish experience-title'>{experience.title}</span>
									<span className='small hopper-pink letter-spacer'>{experience.management}</span>
								</div>;
							})}
						</div>
						<div className='experience-tab-right experience-col'>
							{experienceCol2.map((experience, i) => {
								return <div className='experience-tab' key={i} data-tab={experience.title} onClick = {this.tabOnClick}>
									<span className='white p uppercase boldish experience-title'>{experience.title}</span>
									<span className='small hopper-pink letter-spacer'>{experience.management}</span>

								</div>;
							})}
						</div>
					</div>
					<div className={`experience-detail-parent ${this.state.hideTabs ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOut displayNone'}`}>
						<div>
							<img className='icon-clickable' onClick= {this.handleclose} src={closeButton}></img>
						</div>
						<div className='spacer'>
							<div className = 'experience-detail-top'>
								<span className='h1 white letter-spacer uppercase textCenter'>{this.state.activeTab}</span>
								<div className='experience-detail-date uppercase hopper-green p letter-spacer spacer'>
									<span>{this.state.currentTabData && this.state.currentTabData.date.start}</span> – <span>{this.state.currentTabData && this.state.currentTabData.date.end}</span>
								</div>
								<span className='p uppercase grey letter-spacer light spacer'>{this.state.currentTabData && this.state.currentTabData.management}</span>
							</div>
							<div className='experience-detail-description spacer'>
								<span className='grey p light flex-child'>
									<span className='big-letter indent'>{this.state.currentTabData && this.state.currentTabData.description[0]}</span>
									{this.state.currentTabData && this.state.currentTabData.description.substring(1)}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Experience;