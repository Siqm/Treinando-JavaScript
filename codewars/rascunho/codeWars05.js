// Your task is to make a function that can take any 
// non-negative integer as an argument and return it 
// with its digits in descending order. Essentially, 
// rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){

    n = n.toString();
    var i, j, aux;
    var newString;

    for(i = 0; i < n.length; i++) {
        console.log('i: ', i)
        for(j = 0; j < n.length; j++) {
            console.log('j: ', j)
            if(n.charAt(j) > n.charAt(j+1)) {
                aux = n.charAt(j)
                newString += n.charAt(j+1)
                newString += aux
            }
        }
    }
    return newString
}

console.log(descendingOrder(158432))