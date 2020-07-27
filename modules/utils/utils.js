function sum(a, b) {
  return a + b;
}

//named export
export function sub(a, b){
  return a - b;
}

function mult(a, b){
  return a * b;
}

function div(a, b){
  return a / b;
}

export {mult, div};

export default sum;
