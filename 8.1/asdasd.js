//exemplo 1

let arrays = [1,2,3,4,5,6,7,8,9,10];
 //Essa função acha o numero Maior de um array.
function numeroMaior(array) {
  return Math.max(...array)
}
 //Essa função acha o numero MENOR de um array. 
function numeroMenor(array) {
  console.log();
  return Math.min(...array)
}

const texto = (NumMa, NumMe) => `o numero maior desse array é ${NumMa(arrays)}, e o menor é ${NumMe(arrays)}`

//exemplo 2

console.log(texto(numeroMaior, numeroMenor))

function tabuadaAteDez(n) {
  let tabuada = []
  for (let i = 0; i <= 10*n; i += n) {
    tabuada.push(i)
  }
  return tabuada
}
function imprimi(func) {
  return func(5)
}
console.log(imprimi(tabuadaAteDez))