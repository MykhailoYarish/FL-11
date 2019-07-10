function isSmaller(numberToCompare, comparingValue){
  function isBigger(numberToCompare, comparingValue){
    return numberToCompare > comparingValue;
  }
  return !isBigger(numberToCompare, comparingValue);
}

isSmaller(5,-1)