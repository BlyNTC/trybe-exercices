function achaPalindromo(palavras) {
    let palavra2 = ''
    for(let index = palavras.length - 1;index >= 0;index -= 1) {
        palavra2 += palavras[index]
    }
    if (palavras === palavra2) {
        return console.log('true');
    } else {
        return console.log('false');
    }
}
achaPalindromo('arara')
