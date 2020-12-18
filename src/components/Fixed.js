import React from 'react';
import { Sling as Hamburger } from 'hamburger-react';


class Fixed extends React.Component {
	constructor(){
		super();
	}
		
	render(){
		return (
			<div className={`fixed-parent max-width padder ${this.props.isNavVisible ? 'nav-active' : '' }`}>
				<div className='fixed-child'>
					<div className={`fixed-text ${this.props.isNavVisible ? 'nav-active' : '' }`}>
						<span className='large-text letter-spacer white'>Abhi Gupta</span>
						<span className='small grey light fixed-small'>Columbia Student. Software Engineer. <span className='emphasis-color'>Aspiring Scientist.</span></span>
					</div>		
					<Hamburger id='hamburger' toggled={this.props.isNavVisible} onToggle={this.props.showNav} color={`${this.props.isNavVisible ? 'black' : 'white'}`}/>
				</div>
			
			</div>
		);
	}
}

export default Fixed;