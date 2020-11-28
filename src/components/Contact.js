import React from 'react';
import contactTemplate from '../../template/contactTemplate';
import githubIcon from '../../assets/icons/contactIcons/github_icon.png';
import twitterIcon from '../../assets/icons/contactIcons/twitter-icon.png';
const Contact = props => {

	return <div className='component-parent padder'>
		<div className='component-wrapper noMinHeight'>
			<span className={`large-text white uppercase letter-spacer header boldish flex-child${props.isViz ? 'animate__animated animate__fadeInDown  showElem' : 'hideElem'}`}>Contact</span>
			<a className='hopper-pink h2 letter-spacer uppercase' href={`mailto:${contactTemplate.email}`}>{contactTemplate.email}</a>
			<div>			
				<img className='icon-clickable' src = {githubIcon}></img>
				<img className='icon-clickable' src={twitterIcon}></img>
			</div>
		</div>
	</div>;
};



export default Contact;