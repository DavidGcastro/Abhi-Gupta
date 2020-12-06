import React, {Component}  from 'react';

class Nav extends Component {
	constructor(){
		super();
		this.state = {
			sections: [],
			activeLink: null
		};
	}
	componentDidMount(){
		const sections = [...document.getElementsByClassName('component-parent')].map(section => section.id);
		this.setState({sections});
	}

	render(){
		return	(
			<div className='flex-child nav-parent'>
				<div className='nav-link-parent'>
					{this.state.sections && this.state.sections.length && this.state.sections.map((section, i) => {
						return (
							<div className='nav-link-container' key={i}>
								<a className='nav-link uppercase letter-spacer boldish' id={section} href={`#${section}`}>{section}</a>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Nav;