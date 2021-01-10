import React from 'react';
import aboutTemplate from '../../template/aboutTemplate';
import {replacePlaceholders} from '../../utils/replacePlaceholders';
import LazyImage from '../HOC/LazyImage';
import { AiOutlineMail, AiOutlineFileText, AiFillGithub } from 'react-icons/ai';
import { SiGooglescholar } from 'react-icons/si';

class About extends React.Component {
	constructor(){
		super();
		this.state = {
			padHeight: null,
		};
	}
	render() {	
		return (
			<div className='component-parent' id={aboutTemplate.title.toLowerCase()} style={{marginTop: this.props.padHeight}}>
				<div className='component-wrapper'>
					<div className='about-main-parent'>
						<div className='about-img-wrapper'>
							<LazyImage src = {aboutTemplate.img}  imageStyle='about-img'/>
							<div className='about-contact'>
								{
									Object.keys(aboutTemplate[Object.keys(aboutTemplate)[6]]).map((contact, i) => {
										if(contact.toLowerCase() === 'email') {
											return <a key={i} href={aboutTemplate[Object.keys(aboutTemplate)[6]][contact]}><AiOutlineMail  size={20}/></a>;
										}
										if(contact.toLowerCase() === 'cv') {
											return <a key={i}  href={aboutTemplate[Object.keys(aboutTemplate)[6]][contact]}><AiOutlineFileText size={20}  /></a>;
										}
										if(contact.toLowerCase() === 'github') {
											return <a key={i}  href={aboutTemplate[Object.keys(aboutTemplate)[6]][contact]}><AiFillGithub size={20} /></a>;
										}
										else {
											return <a key={i} href={aboutTemplate[Object.keys(aboutTemplate)[6]][contact]}><SiGooglescholar size={20} /></a>;

										}
									})
								}
							</div>
						</div>	
						<div className='about-main-text'>
							{aboutTemplate && aboutTemplate.main && aboutTemplate.main.map((paragraph, i) => {
								return <span key={i} className='p light subtext-color block about-main-p' dangerouslySetInnerHTML={{__html: replacePlaceholders(paragraph, 'span')}}></span>;
							})}
						</div>
					</div>
					<div className='flex-child about-section full-width spacer-mid'>
						<span className='h2 header-color block'>{Object.keys(aboutTemplate)[3]}</span>
						{aboutTemplate[Object.keys(aboutTemplate)[3]].map((bullet, i) => {
							return <span className='p subtext-color spacer-small light' key={i}> <span style={{marginRight: '5px'}}className='white-emphasis bold'>&#8226;</span>{bullet}</span>;
						})}
						
					</div>
					<div className='flex-child about-section spacer-mid'>
						<span className='h2 header-color block'>{Object.keys(aboutTemplate)[4]}</span>
						<span className='p subtext-color spacer-small light'>{aboutTemplate[Object.keys(aboutTemplate)[4]]}</span>
					</div>
					<div className='flex-child full-width spacer-mid'>
						<span className='h2 header-color block'>{Object.keys(aboutTemplate)[5]}</span>
						<div className='about-list-container'>
							{aboutTemplate[Object.keys(aboutTemplate)[5]].map((topic, i) => {
								return (
									<span className='p emphasis-color' key={i}>{topic}</span>
								);
							})}
						</div>
					</div>

			
				</div>
			</div>
		);
	}
	
}

export default About;