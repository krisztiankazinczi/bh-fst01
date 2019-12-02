
function myCounterModule() {
    let counter = 0;
    function count(){
      counter +=1;
    }
    function getCount(){
        return counter;
    }
    
    return {
        getCountValue : getCount,
        count : count
    }
}

let counter = myCounterModule();
console.log(counter.getCountValue());
counter.count();
counter.count();
counter.count();
console.log(counter.getCountValue());