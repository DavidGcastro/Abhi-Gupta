import React from 'React';
import Header from './Header';
import CenterText from './CenterText';
import template from '../../../template/mainHeaderTemplate';
import particlesConfig from '../../../particlesjs-config.json';
import Particles from 'react-tsparticles';

const MainHeader = () => {
	return (
		<div className='main-header padder'>
			<Particles style= {{position: 'absolute', left: 0, right: 0}}options={particlesConfig} />				
			<Header name={template.name}/>
			<CenterText strings={template.typedStrings}/>
		</div>
	);
};

export default MainHeader;
