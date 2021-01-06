import React, {Component}  from 'react';
import scrollToSmoothly from '../../utils/scrollToSmoothly';
class Nav extends Component {
	constructor(){
		super();
		this.state = {
			activeTab: null,
			padHeight: null,
		};
		this.handleClick = this.handleClick.bind(this);
		this.drawPath = this.drawPath.bind(this);
		this.navLinks = [];
		this.svgPath = null;
		this.pathLength = null;
	}
	componentDidMount() {
		window.addEventListener('scroll', this.sync.bind(this), false);
		window.addEventListener('resize', this.drawPath, false);
		// hacky
		setTimeout(this.drawPath, 50);
	}
	handleClick(e){
		this.setState({activeTab: e.target.innerText.toLowerCase()});
		const element = document.getElementById(e.target.innerText.toLowerCase());
		const fixedHeaderHeightBuffer =	Number(getComputedStyle(document.getElementsByClassName('fixed-parent')[0]).height.replace('px', ''));
		scrollToSmoothly(element.offsetTop - fixedHeaderHeightBuffer < 0 ? fixedHeaderHeightBuffer : element.offsetTop - fixedHeaderHeightBuffer);
		// hacky
		document.getElementsByClassName('hamburger-react')[0].click();
	}
	
	drawPath() {
		var nav = document.querySelector('.nav-link-parent');
		this.svgPath = document.querySelector('#scrollbar path');
		this.navLinks = [].slice.call(nav.querySelectorAll('.nav-link-container'));
		// Cache element references and measurements
		this.navLinks = this.navLinks.map(function(item) {
			var anchor = item.querySelector('.nav-link');
			var target = document.getElementById(anchor.innerHTML);
			return {
				listItem: item,
				anchor: anchor,
				target: target
			};
		});
		var path = [];
		var pathIndent;
		this.navLinks.forEach((item, i) => {
			var x = item.anchor.offsetLeft - 5;
			var y = item.anchor.offsetTop;
			var height = item.anchor.offsetHeight;
			if (i === 0) {
				path.push('M', x, y, 'L', x, y + height);
				item.pathStart = 0;
			} else {
			// Draw an additional line when there's a change in
			// indent levels
				if (pathIndent !== x) path.push('L', pathIndent, y);
				path.push('L', x, y);
				// Set the current path so that we can measure it
				this.svgPath.setAttribute('d', path.join(' '));
				item.pathStart = this.svgPath.getTotalLength() || 0;
				path.push('L', x, y + height);
			}
			pathIndent = x;
			this.svgPath.setAttribute('d', path.join(' '));
			item.pathEnd = this.svgPath.getTotalLength();
		});
		this.pathLength = this.svgPath.getTotalLength();
		this.sync();
	}

	sync() {
		var TOP_MARGIN = 0.1;
		var BOTTOM_MARGIN = 0.2;
		var lastPathStart;
		var lastPathEnd;
		var windowHeight = window.innerHeight;
		var pathStart = this.pathLength;
		var pathEnd = 0;
		var visibleItems = 0;
		this.navLinks && this.navLinks.length && this.navLinks.forEach((item) => {
			var targetBounds = item.target.getBoundingClientRect();
			if (targetBounds.bottom > windowHeight * TOP_MARGIN && targetBounds.top < windowHeight * (1 - BOTTOM_MARGIN)) {
				pathStart = Math.min(item.pathStart, pathStart);
				pathEnd = Math.max(item.pathEnd, pathEnd);
				visibleItems += 1;
				item.listItem.classList.add('visible');
			} else {
				item.listItem.classList.remove('visible');
			}
		});
		// Specify the visible path or hide the path altogether
		// if there are no visible items
		if (visibleItems > 0 && pathStart < pathEnd) {
			if (pathStart !== lastPathStart || pathEnd !== lastPathEnd) {
				this.svgPath.setAttribute('stroke-dashoffset', '1');
				this.svgPath.setAttribute('stroke-dasharray', '1, ' + pathStart + ', ' + (pathEnd - pathStart) + ', ' + this.pathLength);
				this.svgPath.setAttribute('opacity', 1);
			}
		} else {
			this.svgPath.setAttribute('opacity', 0);
		}
		lastPathStart = pathStart;
		lastPathEnd = pathEnd;
	}

	render(){
		return	(
			<div className={`${this.props.isNavVisible? 'nav-parent': 'nav-parent-notVisible'}`} style={{marginTop: this.state.padHeight}}>
				<div className='nav-link-parent'>
					<svg id="scrollbar" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
						<path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
					</svg>
					{[...document.getElementsByClassName('component-parent')].map(section => section.id).map((section, i) => {
						return (
							<div className='nav-link-container' key={i}>
								<span className={`nav-link uppercase letter-spacer a h2 pointer ${this.props.activeTab.toLowerCase() === section.toLowerCase() ? 'active-tab': ''}`} onClick={this.handleClick} id={'nav-link-' + section}>{section}</span>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Nav;