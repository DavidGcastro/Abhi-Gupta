import template from '../../../template/aboutTemplate';
import React  from 'react';
import imgSrc from '../../../assets/images/avatar.jpeg';
const About = () => {
	return (
		<div className='about-parent padder'>
			<img className='about-img' src={imgSrc}></img>
			<div className='about-content center-content-width'>
				<span className='large-text hover'>{template.header}</span>
				<span className='p about-body spacer'>{template.text}</span>
			</div>
		</div>
	);
};

export default About;