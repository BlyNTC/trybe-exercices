// //3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function compareRespostas(gabarito, respostas) {
	let pontos = 0
	for (let i = 0; i < gabarito.length; i++) {
		if (gabarito[i] === respostas[i]) {
			pontos += 1
		}
		if (gabarito[i] !== respostas[i]) {
			pontos += respostas[i] === 'N.A' ? 0 : -0.5
		}
	}
	return pontos
}
const pontos = (gabarito, respostas, func) => func(gabarito, respostas)

console.log(pontos(RIGHT_ANSWERS, STUDENT_ANSWERS, compareRespostas))

const findDivisibleBy3And5 = (number) =>  (number % 5 === 0) && (number % 3 === 0)

console.log(findDivisibleBy3And5(15))