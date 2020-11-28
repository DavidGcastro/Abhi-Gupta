import React from 'react';
import aboutTemplate from '../../template/aboutTemplate';
import icon1 from '../../assets/icons/3.png';
import icon4 from '../../assets/icons/6.png';
import icon6 from '../../assets/icons/8.png';
const About = (props) => {
	return (
		<div className='component-parent padder' id='About'>
			<div className='component-wrapper'>
				<span className={`large-text white uppercase letter-spacer header boldish ${props.isViz ? 'animate__animated animate__fadeInDown  showElem' : 'hideElem'}`}>{aboutTemplate.header}</span>
				<div className='icons-parent'>
					{[icon1, icon4, icon6].map((icon, key) => {
						return <img src={icon} className='icon' key={key}></img>;
					})}
				</div>
				<div className='text-columns'>
					<span className='text-blurb white h2 flex-child column'>{aboutTemplate.textBlurb}</span>
					{aboutTemplate.columns.map((col, i) => {
						return <span  key={i} className='grey p flex-child column light'>
							<span className='big-letter indent boldish'>{col[0]}</span>{col.substring(1)}
						</span>;
					})}
				</div>
			</div>
		</div>
	);
};

export default About;