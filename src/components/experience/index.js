
import React from 'React';
import {Component} from 'React';
import template from '../../../template/experienceTemplate';
import ExperienceTabs from './experience-tabs';

class Experience extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeTab: '',
			amountScrolled: ''
		};
	}
	handleOnScoll(){}
	render() {
		return <div className='experience-parent padder'>
			<ExperienceTabs categories={Object.keys(template)}/>
			<div className='experience-scroll padder' onScroll={this.handleOnScoll}>
				{Object.keys(template).map((section, i) => {
					const currCategory = template[section];
					return (
						currCategory.modules.map(function(module,i){
							return (
								<div key={i} className='experience-module'>
									<span className='p bold uppercase'>{module.date.start} – {module.date.end}</span>
									<span className='large-text bold uppercase'>{module.title}</span>
									<span className='h1' style={{display:'block'}}>{module.organization}</span>
									<span className="p center-content-width">{module.description}</span>		
								</div>
							)
							;
						})
					
					);
				})}
			</div>
		</div>;
	}
}

export default Experience;
