const fs = require('fs');

function oddLines(path) {
	let output = [];
	let buffer = fs.readFileSync(path);
	content = buffer.toString().split('\n');

	for (let i = 0; i < content.length; i += 2) {
		output.push(content[i]);
	}
	return output;
}

function evenLines(path) {
	const poemData = fs.readFileSync(path).toString();
	const poemArray = poemData.split('\r\n');

	return poemArray.filter((line, idx) => idx % 2);
}

odd = oddLines('../vers.txt');
even = evenLines('../vers.txt');

function fullVers(odd, even){
    for (let i = 0; i < even.length; i++) {
            console.log(odd[i])
            console.log(even[i])
    }
}

fullVers(odd, even)