
import React from 'React';
import {Component} from 'React';
import template from '../../../template/experienceTemplate';
import ExperienceTabs from './experience-tabs';

class Experience extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	handleOnScoll(){
	}
	render() {
		return <div className='experience-parent padder'>
			<ExperienceTabs categories={template.categories}/>
			<div className='experience-scroll padder' onScroll={this.handleOnScoll}>
			</div>
		</div>;
	}
}

export default Experience;
