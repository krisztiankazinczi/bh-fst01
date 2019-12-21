const fs = require('fs');

function oddLines(path) {
	const poem = fs.readFileSync(path).toString();
	const oddLines = poem.split('\n');

	return oddLines.filter((line, idx) => idx % 2===0);
}


console.log(oddLines("../vers.txt"));