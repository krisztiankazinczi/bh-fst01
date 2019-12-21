const fs = require('fs');

function oddLines(path) {
	const poemData = fs.readFileSync(path).toString();
	const poemArray = poemData.split('\r\n');

	return poemArray.filter((line, idx) => !(idx % 2));
}

function evenLines(path) {
	const poemData = fs.readFileSync(path).toString();
	const poemArray = poemData.split('\r\n');

	return poemArray.filter((line, idx) => idx % 2);
}

const poem_file = process.argv[2];

function printLines(fpath) {
	let tempArr = [];
	let oddlinesToPrint = oddLines(fpath);
	let evenLinesToPrint = evenLines(fpath);

	oddlinesToPrint.forEach((item, idx) => {
		console.log(item);
		console.log(evenLinesToPrint[idx]);
	});
}

printLines(poem_file);
