// Check to see if a string has the same amount 
// of 'x's and 'o's. The method must return a 
// boolean and be case insensitive. The string 
// can contain any char.

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// function XO(str) {
//     str.toUpperCase()
// }

function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    console.log("x: ", x)
    console.log("o: ", o)
    return (x && x.length) === (o && o.length);
  }

console.log(XO('xo'))
console.log(XO('xxOo'))
console.log(XO('xxxm'))
console.log(XO('Oo'))
console.log(XO('ooom'))

// Time 957ms