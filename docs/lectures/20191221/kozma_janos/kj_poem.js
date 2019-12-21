const fs = require('fs');

function oddLines(path) {
	const poemData = fs.readFileSync(path).toString();
	const poemArray = poemData.split('\r\n');

	return poemArray.filter((line, idx) => !(idx % 2));
}

const poem_file = process.argv[2];
