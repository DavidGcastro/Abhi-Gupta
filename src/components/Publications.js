import React from 'react';
import publicationsTemplate from '../../template/publicationsTemplate';
const pubAdsCol1 = publicationsTemplate.pubArr.slice(0, publicationsTemplate.pubArr.length /2);
const pubAdsCol2 = publicationsTemplate.pubArr.slice(publicationsTemplate.pubArr.length /2);
const colBuilder = (arr, i) => {
	return <div className='publicationsCol' key={i}>
		{arr.map((pub, i) => {
			return (
				pub.link.length ? 
					<a key={i} className='pubTab pointer' href = {pub.link} target='_blank'>
						<div className='pubTab-top'>
							<span className='small grey light hopper-green'>{pub.category}</span>
							<span className='h2 white uppercase light'>{pub.title}</span>
							<span className='p grey light spacer'>{pub.description}</span>
						</div>
						<span className='small pink letter-spacer pubTab-link'>Read more</span>
					</a> :
					<div key={i} className='pubTab removeHoverEvents'>
						<div className='pubTab-top'>
							<span className='small grey light hopper-green'>{pub.category}</span>
							<span className='h2 white uppercase light'>{pub.title}</span>
							<span className='p grey light spacer'>{pub.description}</span>
						</div>
					
					</div>
			);
		})}
	</div>;
};
const Publications = (props) => {
	return (
		<div className='component-parent big-spacer' id={publicationsTemplate.title}>
			<div className='component-wrapper'>
				<div className='publications-parent'>
					{
						publicationsTemplate && publicationsTemplate.highlightedPub && publicationsTemplate.highlightedPub.link.length ? 		
							<a href = {publicationsTemplate.highlightedPub.link} target='_blank' className ='publications-left'>
								<div className='publications-highlight'>
									<span className='small light hopper-green'>{publicationsTemplate.highlightedPub && publicationsTemplate.highlightedPub.category}</span>
									<span className='h2 boldish uppercase textCenter letter-spacer'>{publicationsTemplate.highlightedPub && publicationsTemplate.highlightedPub.title}</span>
								</div>
								<span className='letter-spacer pink small pubTab-link'>{publicationsTemplate.highlightedPub && publicationsTemplate.highlightedPub.link ? 'Read More' : ''}</span>
							</a> : 	
							<div className ='publications-left removeHoverEvents'>
								<div className='publications-highlight'>
									<span className='small light grey'>{publicationsTemplate.highlightedPub && publicationsTemplate.highlightedPub.category}</span>
									<span className='h2 boldish uppercase textCenter letter-spacer'>{publicationsTemplate.highlightedPub && publicationsTemplate.highlightedPub.title}</span>
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




export default Publications;