// Complete the method/function so that it converts 
// dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized 
// only if the original word was capitalized (known as 
// Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){

    // If the string has '-' separating the words, this will separete it 
    var strings = str.split("-")

    // If it doesnt, this will solve the other possibility where there is a '_' on it
    if (!(strings.length >= 2)) {
        strings = str.split('_')
    }

    // Set the firts word to the original string, this way it won't go through the capitalization process
    str = strings[0];
    // Capitalizing first letters
    for (let i = 1; i < strings.length; i++) {
        strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].substr(1, strings[i].length)
        str += strings[i]
    }
    return str
}

console.log(toCamelCase('The-Stealth-Warrior'))

// 635ms