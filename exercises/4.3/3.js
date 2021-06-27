//3- Agora inverta o lado do triângulo. Por exemplo:

let n = 5

for(let index = 1; index <= n; index += 1) {
  let linhas = ''  
    for(let spc = 1; spc <= n - index; spc += 1) {
    linhas += ' '
    }
    for(let linha = 1; linha <= index; linha += 1) {
        linhas += '*'
    }
    
    console.log(linhas)
}
