let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
let divisor = numbers.length

for(index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]
}
media = soma / divisor
console.log(media);

//usa if/else para verificar se a media é maior que 20.
//usa console.log para imprimir mensagem 'valor maior que 20' caso media seja maior que 20.
//usa console.log no else para imprimir caso a condição maior que 20 seja verdadeira.

if (media > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}