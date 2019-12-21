

const path = require('path');
const solutionDir = path.basename(process.argv[2]);
const assert = require('chai').assert;

let easy;

try {
    easy = require(`./${solutionDir}/easy`)
} catch (e) {
    console.error(`Error seting up test: ${e.message}`);
    process.exit(1);
}

describe('easy', () => {

    describe('isEasy', () => {
        it('should return true', () => {

            assert.isTrue(easy.isEasy());
        })
    })

    
})