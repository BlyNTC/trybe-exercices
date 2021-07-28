let arrays = [1,2,3,4,5,6,7,8,9,10];
 //Essa função acha o numero Maior de um array.
function numeroMaior(array) {
  return Math.max(...array)
}
 //Essa função acha o numero MENOR de um array. 
function numeroMenor(array) {
  return Math.min(...array)
}

const texto = (NumMa, NumMe) => `o numero maior desse array é ${NumMa(arrays)}, e o menor é ${NumMe(arrays)}`

console.log(texto(numeroMaior, numeroMenor))
