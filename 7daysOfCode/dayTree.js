const prompt = require('prompt-sync')
const prompt = prompt()

const area = prompt('Você quer seguir a area de (1) Front-End ou (2) Back-End? ')

if (area == 1) {
    console.log('Legal! você escolheu Front-End')
    var linguagem = prompt('Deseja aprender (1) React o (2) Vue? ')
} else {
    console.log('Legal! você escolheu Back-End')
    var linguagem = prompt('Deseja aprender (1) C# ou (2) Java? ')
}