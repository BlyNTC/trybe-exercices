let array = [2, 3, 6, 7, 10, 1];
let maiorValor = array[0];
for (let index = 0; index < array.length; index++) {
    if(maiorValor < array[index]){
        maiorValor = index
    }
}
console.log(maiorValor);