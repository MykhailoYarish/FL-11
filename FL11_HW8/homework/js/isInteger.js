function isInteger(number) {
  let isInteger = false;

  if (typeof number === "number" && number === parseInt(number)) {
    isInteger = true;
  }

  return isInteger;
}

isInteger(3);
