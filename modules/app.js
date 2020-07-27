import { union as juntaTudo } from 'ramda';

import Soma, { sub, mult, div } from './utils/utils';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1];

const arr3 = juntaTudo(arr1, arr2);

console.log(arr3);

console.log(Soma(3,2));
console.log(sub(3,2));
console.log(mult(3,2));
console.log(div(3,2));
