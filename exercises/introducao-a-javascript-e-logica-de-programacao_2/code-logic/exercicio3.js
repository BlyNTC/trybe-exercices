let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
let divisor = numbers.length

//1- use for para percorrer o array
//2- cria variavel soma para armazenar o resultado
//3- cria variavel divisor usando numbers.lenght para armazenar o divisor
//4- use o comando += para somar e armazenar o resultado
//5- usa a variavel divisor para dividir a variavel soma, fazendo a media do array
//6- usa console.log para imprimir a media(cria a variavel media para imprimir)

for(index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]
}
media = soma / divisor
console.log(media);