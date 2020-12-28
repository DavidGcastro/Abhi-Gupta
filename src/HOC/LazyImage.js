import React from 'react';
import styled, { keyframes } from 'styled-components';
import LazyLoad from 'react-lazyload';
const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

const LazyImage = ({ src, imageWrapperStyle, imageStyle }) => {
	const refPlaceholder = React.useRef();
	const refImageWrapper = React.useRef();
	const removePlaceholder = () => {
		refPlaceholder.current.remove();
		refImageWrapper.current.classList.remove('relative');
	};

	return (
		<div className={`${imageWrapperStyle || ''} relative`} ref={refImageWrapper}>
			<Placeholder ref={refPlaceholder} />
			<LazyLoad>
				<img
					width='100%'
					height='100%'
					onLoad={removePlaceholder}
					onError={removePlaceholder}
					src={src}
					className={`${imageStyle || ''}`} 
				>
				</img>
			</LazyLoad>
		</div>
		
	
	);
};


export default LazyImage;