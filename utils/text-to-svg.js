
const path = require('path');
const TextToSVG = require('text-to-svg');
const attributes = {fill: '#1d1d1f', stroke: 'white'};
const options = {x: 0, y: 0, fontSize: 15, anchor: 'top', attributes: attributes,letterSpacing: .45};
TextToSVG.load(path.resolve(__dirname, '../dist/fonts/FuturaPTBold.otf'), function(err, textToSVG) {
	let svg = textToSVG.getSVG('ABOUT ME'.toUpperCase(), options);
	svg = svg.replace('xmlns:xlink', 'xmlnsXlink');
	console.log(svg);
});