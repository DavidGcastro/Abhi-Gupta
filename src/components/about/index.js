import template from '../../../template/aboutTemplate';
import React  from 'react';
const About = () => {
	return (
		<div className='about-parent padder'>
			<div className='about-img'></div>
			<div className='about-content center-content-width'>
				<span className='large-text hover'>{template.header}</span>
				<span className='p about-body'>{template.text}</span>
			</div>
		</div>
	);
};

export default About;