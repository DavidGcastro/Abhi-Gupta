import React from 'React';
import {Component} from 'React';
import MainHeader from './mainHeader/index.js';
import About from './about/index';
import Experience from './experience';
import isInViewport from '../utils/inViewport';
let allDivs = document.getElementsByTagName('div');
class Main extends Component {
	constructor(){
		super();
		this.handleScroll = this.handleScroll.bind(this);

	}
	componentDidMount() {}	
	handleScroll() {
		let initialDiv = document.getElementsByClassName('about-parent')[0];
		let mainHeader = document.getElementsByClassName('main-header')[0];
		if(isInViewport(initialDiv)){
			for(let i = 0; i < allDivs.length; i++){
				allDivs[i].setAttribute('style', `background: ${allDivs[i].getAttribute('data-color')} !important`);
			
			}
		}
		if(isInViewport(mainHeader)){
			for(let i = 0; i < allDivs.length; i++){
				allDivs[i].setAttribute('style', 'background: initial !important; color: white');
			}
		}
	}
	render(){
		return (
			<div className='main-parent'>
				<MainHeader/>
				<About />
			</div>
		
		);
	}

}

export default Main;