import React from 'React';
import {Component} from 'React';
import PropTypes from 'prop-types';  

class Header extends Component  {
	render(){
		return (
			<div className='header-parent padder'>
				<span className='h1'>{this.props.name.first}</span>
				<span className='h1 bold'> {this.props.name.last}</span>
			</div>

		);
	}
}

Header.propTypes = {  
	name: PropTypes.object
	
};

Header.defaultProps = {  
	name: {
		first:'First Name',
		last: 'Last Name'
	}
};  


export default Header;
