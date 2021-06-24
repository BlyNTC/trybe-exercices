let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
let qnt = numbers.length
let media;

for(index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index]
}
console.log("soma dos valores de 'numbers'" ,soma);

media = soma / qnt
console.log("média é igual á", media)

if (media > 20) {
    console.log("valor maior que 20")
} else {
    "valor menor ou igual a 20"
}