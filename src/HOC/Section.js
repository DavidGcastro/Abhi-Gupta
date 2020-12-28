import React, {Component}  from 'react';
import VizSensor from 'react-visibility-sensor';
import scrollToSmoothly from '../../utils/scrollToSmoothly';

class Section extends Component {
	constructor(){
		super();
		this.state = {
			isViz: false
		};
		this.animateOnce = this.animateOnce.call(this);
	}
	animateOnce(){
		return (isVisible) => {
			if(isVisible){
				this.setState({isViz: isVisible});
				this.props.setActiveTab(this.props.tabName);
				if(this.props.tabName !== 'about') {
					const currentElemInView = document.getElementById(this.props.tabName);
					const fixedHeaderHeightBuffer =	Number(getComputedStyle(document.getElementsByClassName('fixed-parent')[0]).height.replace('px', ''));
					scrollToSmoothly(currentElemInView.offsetTop - fixedHeaderHeightBuffer < 0 ? fixedHeaderHeightBuffer : currentElemInView.offsetTop - fixedHeaderHeightBuffer);
				}	
			}	
		};
	}
	render() {
		const {children, ...otherProps} = this.props;
		const windowHeight =  window.innerHeight;
		// ipad pro is 1366
		let partialVisibilityArg = windowHeight <= 1367;
		partialVisibilityArg =  this.props.partialVisPos || partialVisibilityArg;
		console.log('>>>>>>>>', partialVisibilityArg);
		return (
			<VizSensor
				partialVisibility= {partialVisibilityArg}
				minTopValue = {this.props.minTopValue || 0}
				onChange={(isVisible) => {
					this.animateOnce(isVisible);
				}}
			>  
				{React.cloneElement(children, {...otherProps, ...this.state})}
			</VizSensor>
		);
	}
}

export default Section;