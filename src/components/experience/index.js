
import React from 'React';
import template from '../../../template/experienceTemplate';
import ExperienceMenu from './experience-menu';
const Experience = () => {
	return <div className='experience-parent padder'>
		<ExperienceMenu categories={template.categories}/>
	</div>;
};

export default Experience;
