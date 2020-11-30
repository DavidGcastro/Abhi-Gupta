import React  from 'react';
import 'animate.css';
import particlesConfig from '../../particlesjs-config.json';
import Particles from 'react-tsparticles';
import CenterText from './CenterText';
import mainHeaderTemplate from '../../template/mainHeaderTemplate';

const Header = () =>{
	return (
		<div className='main-header'>
			<Particles style= {{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}} options={particlesConfig} />				
			<CenterText typedStrings = {mainHeaderTemplate.typedStrings}/>
		</div>	
	);
};


export default Header;