import React from 'react';
import projectsTemplate from '../../template/projectsTemplate';
const pubAdsCol1 = projectsTemplate.pubArr.slice(0, projectsTemplate.pubArr.length /2);
const pubAdsCol2 = projectsTemplate.pubArr.slice(projectsTemplate.pubArr.length /2);
const colBuilder = (arr, i) => {
	return <div className='publicationsCol' key={i}>
		{arr.map((pub, i) => {
			return (
				pub.link && pub.link.length ? 
					<a key={i} className='pubTab pointer' href = {pub.link} target='_blank'>
						<div className='pubTab-top'>
							<span className='small grey light hopper-green'>{pub.year}</span>
							<span className='p  white  boldish'>{pub.title}</span>
							<span className='p grey light spacer'>{pub.description}</span>
						</div>
						<span className='small grey letter-spacer pubTab-link'>Read more</span>
					</a> :
					<div key={i} className='pubTab removeHoverEvents'>
						<div className='pubTab-top'>
							<span className='small grey light hopper-green'>{pub.year}</span>
							<span className='p boldish white'>{pub.title}</span>
							<span className='p grey light spacer'>{pub.description}</span>
						</div>
					
					</div>
			);
		})}
	</div>;
};
const Projects = () => {
	return (
		<div className='component-parent big-spacer' id={projectsTemplate.title.toLowerCase()}>
			<div className='component-wrapper'>
				<div className='publications-parent'>
					{
						projectsTemplate && projectsTemplate.highlightedPub && projectsTemplate.highlightedPub.link.length ? 		
							<a href = {projectsTemplate.highlightedPub.link} target='_blank' className ='publications-left'>
								<div className='publications-highlight'>
									<span className='small light hopper-green'>{projectsTemplate.highlightedPub && projectsTemplate.highlightedPub.year}</span>
									<span className='p boldish uppercase textCenter letter-spacer'>{projectsTemplate.highlightedPub && projectsTemplate.highlightedPub.title}</span>
								</div>
								<span className='letter-spacer grey small pubTab-link'>{projectsTemplate.highlightedPub && projectsTemplate.highlightedPub.link ? 'Read More' : ''}</span>
							</a> : 	
							<div className ='publications-left removeHoverEvents'>
								<div className='publications-highlight'>
									<span className='small light hopper-green'>{projectsTemplate.highlightedPub && projectsTemplate.highlightedPub.year}</span>
									<span className='p boldish textCenter letter-spacer'>{projectsTemplate.highlightedPub && projectsTemplate.highlightedPub.title}</span>
									<div></div>
								</div>
							</div>
					}
					<div className ='publications-right'>
						{colBuilder(pubAdsCol2)}
						{colBuilder(pubAdsCol1)}
					</div>
				</div>
			</div>
		</div>);
};




export default Projects;