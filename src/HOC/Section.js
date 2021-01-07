import React, {Component}  from 'react';
import VizSensor from 'react-visibility-sensor';
import scrollToSmoothly from '../../utils/scrollToSmoothly';

class Section extends Component {
	constructor(){
		super();
		this.state = {
			isViz: false
		};
		this.animateOnce = this.animateOnce.bind(this);
	}
	animateOnce(isVisible){
		if(isVisible){
			this.setState({isViz: isVisible});
			this.props.setActiveTab(this.props.tabName);
			if(this.props.tabName !== 'about') {
				const currentElemInView = document.getElementById(this.props.tabName);
				scrollToSmoothly(currentElemInView.offsetTop - this.props.padHeight < 0 ? this.props.padHeight : currentElemInView.offsetTop - this.props.padHeight, null, false);
			}	
		}	
	}
	render() {
		const {children, ...otherProps} = this.props;
		const windowHeight =  window.innerHeight;
		// ipad pro is 1366
		let partialVisibilityArg = this.props.partialVisPos || windowHeight <= 1367;
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