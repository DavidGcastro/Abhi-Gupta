const path = require('path');
let  researchDir = path.resolve(__dirname, '../assets/research');
let projects = path.resolve(__dirname, '../assets/projects');
let dirWithPdfs = [researchDir, projects];
const fs = require('fs');
fs.writeFile(researchDir, '', function(){console.log('File contents erase');});
const rewritefile = path.resolve(__dirname, '../assets/_redirects');
let stringArr = dirWithPdfs.map((dir) => {
	let parentDir = dir.split('/');
	parentDir = parentDir[parentDir.length-1];
	return fs.readdirSync(dir).map(file => {
		if(!file.includes('pdf')) {
			return;
		}
		return `/${parentDir}/${file.replace('.pdf', '')} /${parentDir}/${file}`;
	});
});

stringArr = stringArr.flat();
fs.writeFile(rewritefile, stringArr.join('\n'), function(e){console.log(e);});