
import React from 'React';
const ExperienceTabs = (template) => {
	const categories = template.categories;
	return (<div className='experience-tabs'>
		{	
			categories.map((category, i) => {
				return (
					<div key={i} className='experience-tabs-item'>
						<a href='' className='p uppercase'>{category}</a>
					</div>
				);
			})
		}
	</div>
	);
};

export default ExperienceTabs;
