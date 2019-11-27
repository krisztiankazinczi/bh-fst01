let count = process.argv.length - 2;
let minArgs = 3;

function checkArgs(a, b) {
    console.log(a);
    console.log(b);

    console.log(arguments);

    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);

    if (count < minArgs) {
        console.log("no command line arguments specificed");
    }
}

checkArgs(1, 4, 5);
checkArgs(2);
checkArgs(3);