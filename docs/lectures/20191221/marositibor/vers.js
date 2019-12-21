const fs = require('fs');

function oddLines(path) {
	const poem = fs.readFileSync(path).toString();
	const oddLines = poem.split('\n');

	return oddLines.filter((line, idx) => idx % 2===0);
}

function evenLines(path) {
	const poem2 = fs.readFileSync(path).toString();
	const evenLines = poem2.split('\n');

	return evenLines.filter((line, idx) => !(idx % 2===0));
}

function printLines(path) {
	let oddArray = oddLines(path);
	let evenArray = evenLines(path);
	oddArray.forEach((element,idx) => {
		console.log(element);
		console.log(evenArray[idx]);
	});

}

printLines('../vers.txt');