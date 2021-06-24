let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = []
let impares = 0
let index;

for(index = 0; index < numbers.length; index += 1) {
    let conta = numbers[index] % 2
    if(conta > 0 ) {
        impares += 1;
        impar.push(numbers[index])
    }
}

if(impar > 0) {
    console.log(impares)
} else {
    console.log("nenhum valor ímpar encontrado");
}
