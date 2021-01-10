import React from 'react';
import aboutTemplate from '../../template/aboutTemplate';
import {replacePlaceholders} from '../../utils/replacePlaceholders';
import LazyImage from '../HOC/LazyImage';class About extends React.Component {
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
									aboutTemplate['contact'] && aboutTemplate['contact'].content.map((contact, i) => {
										return <a key={i} href={contact.link}>{contact.icon({size: 20})}</a>;							
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
					<div className='flex-child about-section-parent'>
						{aboutTemplate.sections && aboutTemplate.sections.map((sections, i) => {
							return (
								<div className='about-section full-width spacer-mid' key={i}>
									<span className='h2 header-color block'>{sections.title}</span>
									{sections.content && sections.content.map((content, i) => {
										return <span className={`p subtext-color light ${sections.type === 'list'? '' : 'spacer-small'}`} key={i}> {sections.type === 'list' ? <span style={{marginRight: '5px'}}className='white-emphasis bold'>&#8226;</span> : ''}{content}</span>;
									})}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
	
}

export default About;