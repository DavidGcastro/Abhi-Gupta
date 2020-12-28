import React, {Component}  from 'react';
import VizSensor from 'react-visibility-sensor';


class Section extends Component {
	constructor(){
		super();
		this.state = {
			isViz: false
		};
		this.animateOnce = this.animateOnce.call(this);
		this.scrollToSmoothly = this.scrollToSmoothly.bind(this);
	}
	animateOnce(){
		return (isVisible) => {
			if(isVisible){
				this.setState({isViz: isVisible});
				this.props.setActiveTab(this.props.tabName);
				if(this.props.tabName !== 'about') {
					const currentElemInView = document.getElementById(this.props.tabName);
					const fixedHeaderHeightBuffer =	Number(getComputedStyle(document.getElementsByClassName('fixed-parent')[0]).height.replace('px', ''));
					this.scrollToSmoothly(currentElemInView.offsetTop - fixedHeaderHeightBuffer < 0 ? fixedHeaderHeightBuffer : currentElemInView.offsetTop - fixedHeaderHeightBuffer);
				}	
			}	
		};
	}
	scrollToSmoothly(pos, time) {
		/*Time is only applicable for scrolling upwards*/
		/*Code written by hev1*/
		/*pos is the y-position to scroll to (in pixels)*/
		if (isNaN(pos)) {
			throw 'Position must be a number';
		}
		if (pos < 0) {
			throw 'Position can not be negative';
		}
		var currentPos = window.scrollY || window.screenTop;
		if (currentPos < pos) {
			var t = 10;
			for (let i = currentPos; i <= pos; i += 10) {
				t += 10;
				setTimeout(function() {
					window.scrollTo(0, i);
				}, t / 2);
			}
		} else {
			time = time || 2;
			var i = currentPos;
			var x;
			x = setInterval(function() {
				window.scrollTo(0, i);
				i -= 10;
				if (i <= pos) {
					clearInterval(x);
				}
			}, time);
		}
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