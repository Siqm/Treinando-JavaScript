// Complete the solution so that the function will 
// break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// function solution(string) {
//     var len = string.length

//     console.log(!string.match('\w[A-Z]'))

//     while (!string.match('\w[A-Z]')) {
//         string = string.substr(0,string.indexOf(string.match('[A-Z]'))) + ' ' 
//         + string.substr(string.indexOf(string.match('[A-Z]')), len)
//     }

//     return string
// }

// function solution2(string) {
//     var len = string.length

//     console.log(!string.match('\w[A-Z]'))

//     console.log('str.substr: ' + string.substr(0,string.indexOf(string.match('[A-Z]'))))
//     console.log('match: ' + string.match('[A-Z]'))

//     return string
// }

// function teste(string) {
//     return string.replace(/([A-Z])/g, '$1').replace(/^./, (str) => { return str.toUpperCase()})
// }

// function teste2(text) {
//     let result = string.replace(/[A-Z]/g, " ")
//     return result.charAt(0).toUpperCase() + result.slice(1)
// }

function solution(string) {
    return string.replace(/([A-Z])/g, ' $1')
}

console.log('$1')

console.log(teste2('testeCamelGase'))

// console.log(solution2("camel CasingTest"))

// console.log(solution("camelCasingTest"))

