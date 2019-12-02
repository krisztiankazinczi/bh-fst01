let counter = 0;
function count(){
  counter +=1;
}
function getCount(){
    return counter;
}
function setCount(number){
    counter = number;
}

module.exports = {
    getCountValue : getCount,
    count : count
}