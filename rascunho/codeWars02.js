// A Narcissistic Number is a positive number which is
// the sum of its own digits, each raised to the power 
// of the number of digits in a given base. In this Kata, 
// we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

function narcissistic(value) {
    value = value.toString()
    let size = value.length
    var result = 0
    for (let i = 0; i < size; i++) {
        result += Math.pow(value[i], size)
    }

    return result == value;
}

console.log(narcissistic(153))


// 812ms