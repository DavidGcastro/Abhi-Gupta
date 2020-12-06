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
		return (isVisible) => {
			if(isVisible){
				this.setState({isViz: isVisible});
				this.props.setActiveTab(this.props.tabName);	
			}	
		};
	}
	render() {
		const {children, ...otherProps} = this.props;
		const windowHeight =  window.innerHeight;
		return (
			<VizSensor
				partialVisibility= {windowHeight <= 875}
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