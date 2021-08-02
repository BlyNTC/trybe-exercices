// 1 - Dada uma matriz, transforme em um array.
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  // return arrays.reduce((result, element) => {
  //   for (const i of element) {
  //     result.push(i)
  //   }
  // return result})
  return arrays.reduce((acc, cur) => acc.concat(cur));
}

console.log(flatten());
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
