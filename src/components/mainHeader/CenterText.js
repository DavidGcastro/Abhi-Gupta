import  React from 'React';
import {Component} from 'React';
import Typed from 'typed.js';
import PropTypes from 'prop-types';  
class CenterText extends Component  {
	type(){
		const options = {
			strings: this.props.strings,
			typeSpeed: 40,
			loop: true,
		};
		new Typed('.centerText', options);

	}
	componentDidMount(){
		this.type();
	}
	render() {
		return <div className='centerText-parent'><span className='centerText h1 light'></span></div>;
	}
}

CenterText.propTypes = {
	strings: PropTypes.array
};

CenterText.defaultProps = {
	strings: ['This is the first string', 'This is the second string', 'This is the third string']
};
export default CenterText;
