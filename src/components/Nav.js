import React, {Component}  from 'react';
import scrollToSmoothly from '../../utils/scrollToSmoothly';
class Nav extends Component {
	constructor(){
		super();
		this.state = {
			sections: [],
			activeTab: null,
			padHeight: null,
		};
		this.handleClick = this.handleClick.bind(this);

	}
	componentDidMount(){
		const sections = [...document.getElementsByClassName('component-parent')].map(section => section.id);
		this.setState({sections});

	}
	handleClick(e){
		this.setState({activeTab: e.target.innerText.toLowerCase()});
		const element = document.getElementById(e.target.innerText.toLowerCase());
		const fixedHeaderHeightBuffer =	Number(getComputedStyle(document.getElementsByClassName('fixed-parent')[0]).height.replace('px', ''));
		scrollToSmoothly(element.offsetTop - fixedHeaderHeightBuffer < 0 ? fixedHeaderHeightBuffer : element.offsetTop - fixedHeaderHeightBuffer);
		// hacky
		document.getElementsByClassName('hamburger-react')[0].click();
	}
	render(){
		return	(
			<div className={`${this.props.isNavVisible? 'nav-parent': 'nav-parent-notVisible'}`} style={{marginTop: this.state.padHeight}}>
				<div className='nav-link-parent'>
					{this.state.sections && this.state.sections.length && this.state.sections.map((section, i) => {
						return (
							<div className='nav-link-container' key={i}>
								<span className={`nav-link uppercase letter-spacer a h2 pointer ${this.props.activeTab.toLowerCase() === section.toLowerCase() ? 'active-tab': ''}`} onClick={this.handleClick}>{section}</span>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Nav;