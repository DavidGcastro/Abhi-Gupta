import React from 'react';
import projectsTemplate from '../../template/projectsTemplate';

const Projects = () => {
	return (
		<div className='component-parent big-spacer' id={projectsTemplate.title.toLowerCase()}>
			<div className='component-wrapper'>
				<div className='projects-parent'>
					{projectsTemplate.projectsArr && projectsTemplate.projectsArr.map((project, i) => {
						return (
							<a key={i} className='project-cell-parent pointer' href={project.link}>
								<div className='project-top'>
									<span className='small-header emphasis-color'>{project.year}</span>
									<span className='p white  boldish'>{project.title}</span>
									<span className='subtext-color light spacer small-header'>{project.description}</span>
								</div>
								<span className='small link-color letter-spacer project-link'>Read more</span>
							</a> 
						);
					})}
				</div>
			</div>
		</div>);
};




export default Projects;