const fs = require('fs');

// note: sensitive to cwd
// const contents = fs.readFileSync('./readme.txt')
let contents = fs.readFileSync('./user.json', 'utf8')

console.log(`the type of contents is: ${typeof contents}`);
console.log(contents);

const user = JSON.parse(contents);

console.log(`the type of contents is: ${typeof user}`);
console.log(user);

contents = fs.readFileSync('./data.json', 'utf8');

const users = JSON.parse(contents);

console.log(`the type of contents is: ${typeof users}`);
console.log(users);

users.forEach(usr => {
    console.log(usr);
});