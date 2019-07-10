function addOne(x) {
  return x + 1;
}

function pipe(number) {
  let accumulator = number;

  for (let i = 1; i < arguments.length; i++) {
    accumulator = arguments[i](accumulator);
  }

  return accumulator;
}

pipe(1, addOne, addOne, addOne);

