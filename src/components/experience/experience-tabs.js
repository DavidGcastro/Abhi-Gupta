
import React from 'React';
import PropTypes from 'prop-types';  

const ExperienceTabs = ({categories}) => {
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

ExperienceTabs.propTypes = {  
	categories: PropTypes.array
};

export default ExperienceTabs;
