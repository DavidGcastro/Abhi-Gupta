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
									<div className='research-text-top'>
										<span className='light h2 white'>{project.title}</span>
										<span className='p grey light '>{project.presented}</span>							
										<span className='small hopper-green light'>{project.additionalDataToHighlight}</span>
										<div style={{marginTop:25}}>
											<span className='grey light block p'>Contributors</span>
											<div className='research-contrib'>
												{project.contributors && project.contributors.map((contributor, i) => {
													return (
														<span className='p pink boldish' key={i}>{contributor}</span>
													);
												})}
											</div>
										</div>
									</div>
									
								</div>
							
								<div className='research-img-container'>
									<span className='h2 grey light block'>{project.year}</span>
									<LazyImage src = {project.img} imageWrapperStyle='research-img-wrapper' imageStyle='image-style'/>
									<div className='link-container'>
										{project.links && Object.keys(project.links).map((link, i) => {
											return <a href={project.links[link]}className='grey letter-spacer p flex-child a' key={i}>{link}</a>;
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