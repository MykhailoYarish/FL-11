function reverseNumber(number){
    if(!Number.isInteger(number)){
        return false;
    }
    return parseInt(number.toString().split('').reverse().join('')) * Math.sign(number);
}

reverseNumber(10000);