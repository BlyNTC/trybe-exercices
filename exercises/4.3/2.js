//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo
//com 5 asteriscos de base. Por exemplo:
let n = 5

for(let index = 1; index <= n; index += 1) {
  let linhas = ''  
    for(let linha = 1; linha <= index; linha += 1) {
        linhas += '*'
    }
    for(let spc = 1; spc <= n - index; spc += 1) {
        linhas += ' '
}
    console.log(linhas)
}
