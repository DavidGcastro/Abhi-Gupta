import React from 'react';
import publicationsTemplate from '../../template/publicationsTemplate';
const pubAdsCol1 = publicationsTemplate.pubArr.slice(0, publicationsTemplate.pubArr.length /2);
const pubAdsCol2 = publicationsTemplate.pubArr.slice(publicationsTemplate.pubArr.length /2);
const colBuilder = (arr, i) => {
	return <div className='publicationsCol' key={i}>
		{arr.map((pub, i) => {
			return (
				<a key={i} className='pubTab' href = {pub.link} target='_blank'>
					<div className='pubTab-top'>
						<span className='small grey light'>{pub.category}</span>
						<span className='h2 white uppercase light'>{pub.title}</span>
						<span className='p grey light'>{pub.description}</span>
					</div>
					<span className='small hopper-pink letter-spacer pubTab-link'>{pub.link ? 'Read more' : ''}</span>
				</a>
			);
		})}
	</div>;
};
const Publications = (props) => {
	return (
		<div className='component-parent padder'>
			<div className='component-wrapper'>
				<span className={`large-text white uppercase letter-spacer header boldish flex-child${props.isViz ? 'animate__animated animate__fadeInDown  showElem' : 'hideElem'}`}>{publicationsTemplate.title}</span>
				<div className='publications-parent'>
					{
						publicationsTemplate && publicationsTemplate.highlightedPub ? 		
							<a href = {publicationsTemplate.highlightedPub.link} target='_blank' className ='publications-left'>
								<div className='publications-highlight'>
									<span className='small light grey'>{publicationsTemplate.highlightedPub && publicationsTemplate.highlightedPub.category}</span>
									<span className='h2 boldish uppercase textCenter letter-spacer'>{publicationsTemplate.highlightedPub && publicationsTemplate.highlightedPub.title}</span>
								</div>
								<span className='letter-spacer hopper-pink small pubTab-link'>{publicationsTemplate.highlightedPub && publicationsTemplate.highlightedPub.link ? 'Read More' : ''}</span>
							</a> : <div></div>
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