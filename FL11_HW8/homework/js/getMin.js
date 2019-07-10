function getMin() {
  let minNumber = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (minNumber > arguments[i]) {
      minNumber = arguments[i];
    }
  }

  return minNumber;
}

getMin(3, 0, -3);
