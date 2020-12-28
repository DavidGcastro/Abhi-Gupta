import React from 'react';
import aboutTemplate from '../../template/aboutTemplate';
import {replacePlaceholders} from '../utils';
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
	componentDidMount(){
		const fixed = getComputedStyle(document.getElementsByClassName('fixed-parent')[0]).height;
		this.setState({padHeight: fixed});	
	}

	render() {	
		return (
			<div className='component-parent' id={aboutTemplate.title.toLowerCase()} style={{marginTop: this.state.padHeight}}>
				<div className='component-wrapper'>
					<div className='about-main-parent'>
						<div className='about-img-wrapper'>
							<LazyImage src = {aboutTemplate.img}  imageStyle='about-img'/>
							<div className='about-contact'>
								{
									Object.keys(aboutTemplate[Object.keys(aboutTemplate)[5]]).map((contact, i) => {
										if(contact.toLowerCase() === 'email') {
											return <a key={i} href={aboutTemplate[Object.keys(aboutTemplate)[5]][contact]}><AiOutlineMail  size={20}/></a>;
										}
										if(contact.toLowerCase() === 'cv') {
											return <a key={i}  href={aboutTemplate[Object.keys(aboutTemplate)[5]][contact]}><AiOutlineFileText size={20}  /></a>;
										}
										if(contact.toLowerCase() === 'github') {
											return <a key={i}  href={aboutTemplate[Object.keys(aboutTemplate)[5]][contact]}><AiFillGithub size={20} /></a>;
										}
										else {
											return <a key={i} href={aboutTemplate[Object.keys(aboutTemplate)[5]][contact]}><SiGooglescholar size={20} /></a>;

										}
									})
								}
							</div>
						</div>	
						<div className='about-main-text'>
							{aboutTemplate && aboutTemplate.main && aboutTemplate.main.map((paragraph, i) => {
								return <span key={i} className='p light subtext-color block about-main-p' dangerouslySetInnerHTML={{__html: replacePlaceholders(paragraph, 'span', 'emphasis-color', 'block')}}></span>;
							})}
						</div>
					</div>
					<div className='flex-child about-second'>
						<span className='h2 header-color block'>{Object.keys(aboutTemplate)[3]}</span>
						<span className='p subtext-color spacer-small light'>{aboutTemplate[Object.keys(aboutTemplate)[3]]}</span>
					</div>
					<div className='flex-child full-width'>
						<span className='h2 header-color block'>{Object.keys(aboutTemplate)[4]}</span>
						<div className='about-list-container'>
							{aboutTemplate[Object.keys(aboutTemplate)[4]].map((topic, i) => {
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