let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
//cria um for para percorrer os elementos no array
//cria a variavel 'soma' com o valor 0 para guardar a soma das variaveis
//usa o comando '+=' para somar os elementos e envia-los para a variavel 'soma'
//usa console.log para imprimir 'soma'

for(let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]
}
console.log(soma)
