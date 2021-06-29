// 4- Crie uma função que receba um array de nomes e 
//retorne o nome com a maior quantidade de caracteres.
let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
function nomeMaior(array){
    let maiorValor = array[0];
    for (let p of array) {
        if(p.length > maiorValor.length){
            maiorValor = p
        }
    }
    return console.log(maiorValor)
}
nomeMaior(array)