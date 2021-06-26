
//Cria uma variavel para armazenar numeroMaior
//cria a entrutura for que percorre o array.
//Dentro do For vou comparar a variavel numeroMaior que o seu valor inicial é numbers[0], 
//com os numbers[index] recorrentes. Se o número comparado for maior que o numeroMaior atual, ele é substituido.
//imprime numeroMaior
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numeroMaior = numbers[0]
for(let index = 0;index < numbers.length;index += 1) {
    if (numeroMaior < numbers[index]) {
        numeroMaior = numbers[index]
    }
}
console.log(numeroMaior);