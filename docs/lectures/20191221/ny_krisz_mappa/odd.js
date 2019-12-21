const fs = require('fs')


function oddLines(path){
    let output = []
    let buffer = fs.readFileSync(path)
    content = buffer.toString().split('\n')

    for (let i = 0; i < content.length; i+=2) {
        output.push(content[i])
    }
    console.log(output)
}

oddLines('../vers.txt')
