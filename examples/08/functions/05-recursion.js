function infiniteRecursion() {
    console.log("Micimacko, that's not honey! That's recursion!!!! :O");
    infiniteRecursion();
}

// infiniteRecursion();


function firstNPositives(n) {
    if ( n == 0 ) {
        return;
    }

    // console.log(n); // print in descending order
    firstNPositives(n - 1);
    console.log(n);
}

firstNPositives(10);