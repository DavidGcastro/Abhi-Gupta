
import React from 'React';
import {Component} from 'React';
import template from '../../../template/experienceTemplate';
import ExperienceTabs from './experience-tabs';
import isInViewPort from '../../utils/inViewport';
class Experience extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeTab: 'experience',
			freezePosition: false
		};
		this.handleScroll = this.handleScroll.bind(this);
	}
	componentDidMount() {
		this.currPos = 0;
		window.addEventListener('scroll', this.handleScroll, 500);	
	}	
	handleScroll() {
		const elem = document.getElementsByClassName('experience-parent')[0];
		const elemPos = elem.offsetTop;
		const scroller = document.getElementsByClassName('experience-scroll')[0];
		const bounding = elem.getBoundingClientRect();
		const modules = document.getElementsByClassName('experience-module');
		if(isInViewPort(elem)){
			this.setState({freezePosition: true});
		}	
		this.currPos = window.scrollY;
	}
	

	render() {
		return (
			<div className={`experience-parent padder ${this.state.freezePosition ? 'fixed': ''}`} >
				<ExperienceTabs categories={Object.keys(template)}/>
				<div className='experience-scroll'style={{width: 100 * (template[this.state.activeTab] &&  template[this.state.activeTab].modules ? template[this.state.activeTab].modules.length * 2 : 1)+ '%' }}>
					{Object.keys(template).map((section, i) => {
						const currCategory = template[section];
						return (
							<div id={section} className="experience-module_parent" key={i}>
								{
									currCategory && currCategory.modules && currCategory.modules.map(function(module,i){
										return (
											<div key={i} className='experience-module padder' id={'experience-module_' + i}>
												<div className='center-content-width'>
													<span className='p bold uppercase hopper-pink'>{module.date.start} – {module.date.end}</span>
													<span className='large-text bold uppercase'>{module.title}</span>
													<span className='h1' style={{display:'block'}}>{module.organization}</span>
													<span className="p spacer">{module.description}</span>	
												</div>	
											</div>
										)
										;
									})}
							</div>
						
						);
					}
					)}
				</div>
			</div>
		);
	}
}

export default Experience;
