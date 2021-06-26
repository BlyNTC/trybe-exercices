//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 ,
//imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
let n = 5

for(let index = 1; index <= n; index += 1) {
  let linhas = ''  
    for(let linha = 1; linha <= n; linha += 1) {
			linhas = linhas + '*'
    }console.log(linhas)
}