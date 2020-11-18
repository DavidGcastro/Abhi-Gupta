import  React, {Component} from 'react';

import Typed from 'typed.js';
import PropTypes from 'prop-types';  
class CenterText extends Component  {
	type(){
		const options = {
			strings: this.props.typedStrings,
			typeSpeed: 40,
			loop: true,
		};
		new Typed('.centerText', options);

	}
	componentDidMount(){
		this.type();
	}
	render() {
		return <div className='centerText-parent'><span className='centerText h2 light'></span></div>;
	}
}

CenterText.propTypes = {
	typedStrings: PropTypes.array
};

CenterText.defaultProps = {
	typedStrings: ['This is the first string', 'This is the second string', 'This is the third string']
};
export default CenterText;
