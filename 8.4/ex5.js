// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, name)=> {
    for (let i = 0; i < name.length; i++) {
      acc += name[i].toLowerCase() === 'a' ? 1:0
    }
    return acc
  }, 0)
}
console.log('exercicio 6',containsA());
assert.deepStrictEqual(containsA(), 20);
