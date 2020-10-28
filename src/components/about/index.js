import template from '../../../template/aboutTemplate';
import React from 'React';

const About = () => {
	return (
		<div className='about-parent padder'>
			<div className='about-img'></div>
			<div className='about-content center-content-width'>
				<span className='large-text about-header'>{template.header}</span>
				<span className='p about-body'>{template.text}</span>
			</div>
		</div>
	);
};

export default About;