// Solução:
    // Este é um problema bem simples que utiliza da distinção entre '===' e '=='.
    // '===' indica 'true' se, apenas SE, *variavel 1* for IDENTICA a *variavel 2*
    // '==' indica 'true' se, apenas SE, *variavel 1* for igual a *variavel 2*  

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

// Esperando resultado apenas se as duas tem o mesmo valor, ignorando a distinção de TIPO
if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

// Caso onde elas tem TIPOS diferentes
if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}