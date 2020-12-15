import React from 'react';
import aboutTemplate from '../../template/aboutTemplate';
import {replacePlaceholders} from '../utils';
import LazyImage from '../HOC/LazyImage';
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
						</div>	
						<div className='about-main-text'>
							{aboutTemplate && aboutTemplate.main && aboutTemplate.main.map((paragraph, i) => {
								return <span key={i} className='p subtext-color block flex-child spacer' dangerouslySetInnerHTML={{__html: replacePlaceholders(paragraph, 'span', 'emphasis-color')}}></span>;
							})}
						</div>
					</div>
					<div className='flex-child about-second'>
						<span className='h2 header-color block'>{Object.keys(aboutTemplate)[3]}</span>
						<span className='p subtext-color spacer'>{aboutTemplate[Object.keys(aboutTemplate)[3]]}</span>
					</div>
					<div className='about-third flex-child'>
						<span className='h2 header-color block'>{Object.keys(aboutTemplate)[4]}</span>
						<div className='flex-child spacer about-topics-container'>
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