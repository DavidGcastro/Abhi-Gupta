import React from 'react';
import publicationsTemplate from '../../template/publicationsTemplate';
const pubAdsCol1 = publicationsTemplate.pubArr.slice(0, publicationsTemplate.pubArr.length /2);
const pubAdsCol2 = publicationsTemplate.pubArr.slice(publicationsTemplate.pubArr.length /2);
const colBuilder = (arr, i) => {
	return <div className='publicationsCol' key={i}>
		{arr.map((pub, i) => {
			return (
				<div key={i} className='pubTab'>
					<span className='small grey light'>{pub.category}</span>
					<span className='h2 white uppercase light'>{pub.title}</span>
					<span className='p grey light'>{pub.description}</span>
					<span className='small hopper-pink letter-spacer'>{pub.link ? 'Read more' : ''}</span>
				</div>
			);
		})}
	</div>;
};
const Publications = (props) => {
	return (
		<div className='component-parent padder'>
			<div className='component-wrapper'>
				<span className={`large-text white uppercase letter-spacer header boldish ${props.isViz ? 'animate__animated animate__fadeInDown  showElem' : 'hideElem'}`}>{publicationsTemplate.title}</span>
				<div className='publications-parent'>
					{
						publicationsTemplate && publicationsTemplate.highlightedPub ? 		
							<div className ='publications-left'>
								<span className='small light grey'>{publicationsTemplate.highlightedPub && publicationsTemplate.highlightedPub.category}</span>
								<span className='h2 boldish uppercase textCenter letter-spacer'>{publicationsTemplate.highlightedPub && publicationsTemplate.highlightedPub.title}</span>
								<span className='letter-spacer hopper-pink small'>{publicationsTemplate.highlightedPub && publicationsTemplate.highlightedPub.link ? 'Read More' : ''}</span>
							</div> : <div></div>
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