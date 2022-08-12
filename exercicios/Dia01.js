// Neste exercício, criaremos uma função que calcula a quantidade 
// mínima de passos que uma pessoa precisa dar para atravessar a rua.

// A nossa pessoa deseja atravessar a rua. Inicialmente, a pessoa 
// está localizada em uma posição X, e deseja chegar a uma posição 
// maior ou igual a Y. A cada passo que a nossa pessoa dá, ela percorre 
// uma distância fixa que denominaremos Z. Na nossa função, precisaremos:

// Contar a quantidade mínima de passos que a nossa 
// pessoa precisa dar para atravessar a rua, ou seja, 
// sair da posição X e chegar ou ultrapassar a posição Y.

// Em nossa função, precisamos passar os parâmetros. Por exemplo, 
// daremos 3 números inteiros, X, Y e Z, e a função deverá retornar 
// um número mínimo de passos que inicie da posição X e vá para uma 
// posição maior ou igual a Y.

let x = 5
let y = 40
let d = 1

// for (let i = 0; i < 40; i++) {
//     console.log(i)
//     if (x < y) {
//         x = d + x
//     } else {
//         console.log('Breaking' + x)
//         break
//     }
// }

x = y-x
let passos = x / 1
console.log(passos)