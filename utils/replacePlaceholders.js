
const replacePlaceholders =  (text, type, classList = '') => {
	const rxp = /{([^}]+)}/g;
	let curMatch;
	const found = [];
	while( curMatch = rxp.exec( text) ) {
		found.push( curMatch[1] );
	}	
	if(found.length){
		let isLink = false;
		let textContent;
		let link;
		let additionalClass = '';
		found.forEach(change => {
			textContent = change;
			if(textContent.includes('link=')){
				const linkRegex = /link=([^\s]+)/;
				let match = change.match(linkRegex);
				let fullMatch = match[0];
				link = match[1];
				textContent = textContent.replace(fullMatch, '');
				isLink = true;
			}
			if(textContent.includes('class=')){
				const classRegex = /class=(.+?)(?:,|$)/;
				let match = change.match(classRegex);
				let fullMatch = match[0];
				additionalClass = match[1];
				textContent = textContent.replace(fullMatch, '').trim();
			}
			classList = '' + additionalClass;
			text = !isLink ? text.replace(`{${change}}`, `<${type} class='${classList}'>${textContent}</${type}>`) : text.replace(`{${change}}`, `<a class='${classList}' href=${link}>${textContent}</a>`);
		});
	}
	return text;
};

export {replacePlaceholders};