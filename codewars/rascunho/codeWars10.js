// In this little assignment you are given a string of space
// separated numbers, and have to return the highest and 
// lowest number as a string.

// function highAndLow(numbers){
//     var numbers = numbers.split(' ');
//     numbers = numbers.map();
//     numbers.sort();
//     var last = numbers.length;
//     return numbers
//     // return numbers[0] + " " + numbers[last -1];
// }

function highAndLow(numbers){
    var number = numbers.split(' ');
    number = number.map(function parseToInteger(element) {
        return parseInt(element, 10)
    })

    number.sort(function sorting(x, b) {
        return (x - b)
    });
    
    var last = number.length - 1;

    return number[last] + " " + number[0];
}

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)
// console.log(newArr)

// function myFunction(num) {
//   return num * 10;
// }



console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))