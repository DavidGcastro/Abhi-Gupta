import React from 'react';
import contactTemplate from '../../template/contactTemplate';
import githubIcon from '../../assets/icons/contactIcons/github_icon.png';
import twitterIcon from '../../assets/icons/contactIcons/twitter-icon.png';
import linkedinIcon from '../../assets/icons/contactIcons/linkedin_icon.png';
const icons = [githubIcon, twitterIcon, linkedinIcon];
const Contact = props => {

	return <div className='component-parent padder'>
		<div className='component-wrapper contact-parent'>
			<span className={`large-text white uppercase letter-spacer header boldish flex-child${props.isViz ? 'animate__animated animate__fadeInDown  showElem' : 'hideElem'}`}>Contact</span>
			<div className='contact-section'>
				<a className='hopper-pink h2 letter-spacer uppercase' href={`mailto:${contactTemplate.email}`}>{contactTemplate.email}</a>
				<div className='contact-icon-parent'>
					{contactTemplate.profiles.map((profile, i) => {
						const type = Object.keys(profile)[0];
						let src = '';
						if(type.toLowerCase() === 'github'){
							src = githubIcon;
						}
						else if(type.toLowerCase() === 'linkedin') {
							src = linkedinIcon;
						}
						else if(type.toLowerCase()=== 'twitter') {
							src = linkedinIcon;
						}
						return <a key={i} target='_blank'href={profile[type]}><img className='icon-clickable' src={src}></img></a>;
					})}
				</div>

			</div>
	
		</div>
	</div>;
};



export default Contact;