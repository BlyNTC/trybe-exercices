//4- Depois, faça uma pirâmide com n asteriscos de base:
let n = 5

let n2 = 3

for(let index = 0; index <= n; index += 2) {
  let linhas = ''  
    for(let spc = 1; spc <= n2 - index; spc += 2) {
    linhas += ' '
    }
    for(let linha = 0; linha <= index; linha += 1) {
        linhas += '*'
    }
    for(let spc2 = 1;spc2 <= n2 - index; spc2 += 2){
        linhas += ' '
    }
    console.log(linhas)
}
