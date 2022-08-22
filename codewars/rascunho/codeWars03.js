// Check to see if a string has the same amount 
// of 'x's and 'o's. The method must return a 
// boolean and be case insensitive. The string 
// can contain any char.

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    var xMeter = 0
    var oMeter = 0

    for (var i = 0; i < str.length; i++) {
      if (str[i].toUpperCase() === 'X') {
        xMeter++
      } else if (str[i].toUpperCase() === 'O') {
        oMeter++
      }
    }

    if (xMeter === oMeter) {
        return true
    }
    return false
}

console.log(XO('xo'))
console.log(XO('xxOo'))
console.log(XO('xxxm'))
console.log(XO('Oo'))
console.log(XO('ooom'))

// Time 957ms