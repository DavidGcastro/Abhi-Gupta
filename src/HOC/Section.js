import React, {Component}  from 'react';
import VizSensor from 'react-visibility-sensor';


class Section extends Component {
	constructor(){
		super();
		this.state = {
			isViz: false
		};
		this.animateOnce = this.animateOnce.call(this);
	}
	animateOnce(){
		let callCount = 0;
		return (isVisible) => {
			if(isVisible){
				callCount+=1;
				if(callCount <= 1){
					this.setState({isViz: isVisible});
				}
			}
		
		};
	}
	render() {
		const {children, ...otherProps} = this.props;
		const windowHeight =  window.innerHeight;
		return (
			<VizSensor
				partialVisibility= {windowHeight <= 815}
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