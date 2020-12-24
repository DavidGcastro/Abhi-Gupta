import React, {Component}  from 'react';
import researchExperienceTemplate from '../../template/reasearchExperienceTemplate';
import LazyImage from '../HOC/LazyImage';

class  Research extends Component {
	constructor(){
		super();
	}
	render(){
		return 	(
			<div className='component-parent flex-child big-spacer' id={researchExperienceTemplate.title.toLowerCase()}>
				<div className='component-wrapper'>
					{researchExperienceTemplate.projects.map((project, i) => {
						return (
							<div key={i} className='research-parent flex-child spacer'>
								<div className='research-text flex-child'>
									<span className='light h2 white'>{project.title}</span>
									<span className='p subtext-color light '>{project.presented}</span>							
									<span className='small detail-color light'>{project.additionalDataToHighlight}</span>
									<div style={{marginTop:25}}>
										<span className='header-color light block p'>Contributors</span>
										<div className='research-contrib'>
											{project.contributors && project.contributors.map((contributor, i) => {
												return (
													<span className='p emphasis-color boldish' key={i}>{contributor}</span>
												);
											})}
										</div>
									</div>	
								</div>
							
								<div className='research-img-container'>
									<span className='h2 grey light block'>{project.year}</span>
									<LazyImage src = {project.img} imageWrapperStyle='research-img-wrapper' imageStyle='image-style'/>
									<div className='link-container'>
										{project.links && Object.keys(project.links).map((link, i) => {
											return <a href={project.links[link]}className='letter-spacer p flex-child a link-color' key={i}>{link}</a>;
										})}
									</div>				
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}





export default Research;