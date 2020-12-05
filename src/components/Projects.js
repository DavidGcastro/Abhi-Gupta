import React, {Component}  from 'react';
import researchProjectsTemplate from '../../template/reasearchProjectsTemplate';

class Projects extends Component {
	constructor(){
		super();
	}
	render(){
		return 	(
			<div className='component-parent flex-child big-spacer' id={researchProjectsTemplate.title}>
				<div className='component-wrapper'>
					{researchProjectsTemplate.projects.map((project, i) => {
						return (
							<div key={i} className='project-parent flex-child spacer'>
								<div className='project-text flex-child'>
									<div className='project-text-top'>
										<div className='spacer'>
											<span className='small grey light block'>{project.year}</span>
											<span className='light h2 white'>{project.title}</span>
										</div>
										<span className='p grey light '>{project.presented}</span>							
										<span className='small hopper-green light'>{project.additionalDataToHighlight}</span>
										<div className='spacer'>
											<span className='grey light block p'>Contributors</span>
											<div className='projects-contrib'>
												{project.contributors && project.contributors.map((contributor, i) => {
													return (
														<span className='small white light' key={i}>{contributor}</span>
													);
												})}
											</div>
										</div>
									</div>
									<div className='link-container'>
										{project.links && Object.keys(project.links).map((link, i) => {
											return <a href={project.links[link]}className='pink letter-spacer small flex-child' key={i}>{link}</a>;
										})}
									</div>	
								</div>
								{project.img ? 	
									<div className='project-img-container'>
										<img src={project.img} className='project-img'></img>
									</div> : ''}
							
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}





export default Projects;