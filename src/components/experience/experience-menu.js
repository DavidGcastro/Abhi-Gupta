
import React from 'React';
const ExperienceMenu = (template) => {
	const categories = template.categories;
	return (<div className='experience-menu'>
		{	
			categories.map((category, i) => {
				return (
					<span key={i} className='experience-menu-item p uppercase'>{category}</span>
					
				);
			})
		}
	</div>
	);
};

export default ExperienceMenu;
