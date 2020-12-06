import React from 'react';
import aboutTemplate from '../../template/aboutTemplate';
import avatar from '../../assets/aboutImages/avatar.png';
import {replacePlaceholders} from '../utils';
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
			<div className='component-parent' id={aboutTemplate.title} style={{marginTop: this.state.padHeight}}>
				<div className='component-wrapper'>
					<div className='about-main-parent'>
						<div className='about-img-wrapper'>
							<img className='about-img' src={avatar}></img>
						</div>	
						<div className='about-main-text'>
							{aboutTemplate && aboutTemplate.main.map((paragraph, i) => {
								return <span key={i} className='p grey block flex-child spacer' dangerouslySetInnerHTML={{__html: replacePlaceholders(paragraph, 'span', 'hopper-green')}}></span>;
							})}
						</div>
					</div>
					<div className='flex-child about-second'>
						<span className='h2 white block'>{Object.keys(aboutTemplate)[2]}</span>
						<span className='p grey spacer'>{aboutTemplate[Object.keys(aboutTemplate)[2]]}</span>
					</div>
					<div className='about-third flex-child'>
						<span className='h2 white block'>{Object.keys(aboutTemplate)[3]}</span>
						<div className='flex-child spacer about-topics-container'>
							{aboutTemplate[Object.keys(aboutTemplate)[3]].map((topic, i) => {
								return (
									<span className='p hopper-green flex-child' key={i}>{topic}</span>
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