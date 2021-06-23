let num3 = 65
let num2 = 55
let num1 = 60 

let angulo1; 
let angulo2;
let angulo3;

if (num1 > 0 && num2 > 0 && num3 > 0) {
    angulo1 = num1;
    angulo2 = num2;
    angulo3 = num3;
} else {
    console.log("algum número é um angulo inválido");
}


let somaAngulos = angulo1 + angulo2 + angulo3

if (somaAngulos == 180) {
    console.log("true");
} else {
    console.log("false");
}