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
					{
						Object.keys(researchExperienceTemplate.projects).reverse().map((year, i) => {
							return (
								<div key={i} className='about-year'>
									<span className='h1 white'>{year}</span>
									{
										researchExperienceTemplate.projects[year].map((project, i) => {
											return (
												<div key={i} className='research-parent flex-child spacer'>
													<div className='research-text'>
														<span className='h2 white'>{project.title}</span>
														<span className='p subtext-color light '>{project.presented}</span>							
														<span className='h3 subtext-color light' style={{lineHeight: '1.75em'}}>{project.additionalDataToHighlight}</span>
														<div className='research-contrib'>
															{project.contributors && project.contributors.map((contributor, i) => {
																return (
																	<span className='p emphasis-color' key={i}>{contributor}</span>
																);
															})}
														</div>	
													</div>
													<div className='research-img-container'>
														<LazyImage src = {project.img} imageWrapperStyle='research-img-wrapper' imageStyle='image-style'/>
														<div className='link-container'>
															{project.links && Object.keys(project.links).map((link, i) => {
																return <a href={project.links[link]}className='letter-spacer p a link-color lowercase' key={i}>{link}</a>;
															})}
														</div>	
													</div>			
												</div>
											);
										})
									}
								</div>
							);
						})
					}
				</div>
			</div>
		);
	}
}





export default Research;