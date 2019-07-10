function reverseNumber(number) {
  number = String(number);
  const beginIndex = number.length - 1;
  let endIndex = 0;
  let reversedNumber = "";

  if (number[0] === "-") {
    reversedNumber = "-";
    endIndex = 1;
  }
  for (let i = beginIndex; i >= endIndex; i--) {
    reversedNumber += number[i];
  }

  return parseInt(reversedNumber);
}

reverseNumber(-456);
