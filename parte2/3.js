
let array = [2, 3, 6, 7, 10, 1];
let menorValor = array[0];
for (let index = 0; index < array.length; index++) {
    if(menorValor < array[index]){
        menorValor = index
    }
}
console.log(menorValor);