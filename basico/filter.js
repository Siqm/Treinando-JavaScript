const value = '10';
const integer = 10;

const test = [1,2,"a","b"];

function filtering(value) {
    return Number.isInteger(value);
}

console.log(test.filter(filtering))

function isBigEnough(value) {
    return value >= 10;
  }

function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
}

function filter_list(l) {
    return l.filter(e => Number.isInteger(e));
}