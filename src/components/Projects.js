import React, {Component}  from 'react';
import researchProjectsTemplate from '../../template/reasearchProjectsTemplate';

class Projects extends Component {
	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(link){
		const goto = link;
		return () => {
			window.open(link);
		};
	}
	render(){
		return 	(
			<div className='component-parent padder' id={researchProjectsTemplate.title}>
				<div className='component-wrapper'>
					<span className={`large-text white uppercase letter-spacer header boldish ${this.props.isViz ? 'animate__animated animate__fadeInDown  showElem' : 'hideElem'}`}>{researchProjectsTemplate.title}</span>
					{researchProjectsTemplate.projects.map((project, i) => {
						return (
							<div key={i} className='project-parent flex-child spacer'>
								<div onClick= {project.link && this.handleClick(project.link)} className={`project-text flex-child ${!project.link ? 'removeHoverEvents' : ''}`} style={ project.link && {cursor: 'pointer'}}>
									<div className='project-text-top'>
										<div>
											<span className='small grey light block'>{project.year}</span>
											<span className='light h2 white'>{project.title}</span>
										</div>
										<span className='p grey light'>{project.presented}</span>							
										<span className='small hopper-green light'>{project.additionalDataToHighlight}</span>
										<div className='projects-contrib'>
											<span className='grey light block p'>Contributors —</span>
											{project.contributors && project.contributors.map((contributor, i) => {
												return (
													<span className='small white light' key={i}>{contributor}</span>
												);
											})}
											{project.contributors.map((elm, i) => <div key={i}></div>)}
										</div>
									</div>
									{project.link ? <span className='small hopper-pink letter-spacer project-link'>Read More</span> : <span></span>}
								</div>
								<img src={project.img} className='project-img'></img>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}





export default Projects;