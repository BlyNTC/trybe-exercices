function verificaFimPalavra(palavra1, palavra2) {
    let comparacao = ''
    let verificao = false
    for (let index = palavra2.length - 1; index >= 0; index--) {
         comparacao += palavra2[index]
    }
    if (palavra2 === comparacao) {
        verificao = true;
    } else {
        verificao = false
    }
    return console.log(verificao);
}
verificaFimPalavra('trybe', 'be')