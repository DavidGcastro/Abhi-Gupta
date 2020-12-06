const replacePlaceholders =  (text, type, classList, context) => {
	console.log(context);
	const rxp = /{([^}]+)}/g;
	let curMatch;
	const found = [];
	while( curMatch = rxp.exec( text) ) {
		found.push( curMatch[1] );
	}
	if(found.length){
		found.forEach(change => {
			text = text.replace(`{${change}}`, `<${type} class=${classList}>${change}</${type}>`);
		});
	}
	return text;
};

export {replacePlaceholders};