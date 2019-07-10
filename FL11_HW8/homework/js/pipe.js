function addOne(x) {
    return x + 1;
}
  
function pipe(number, ...functions){
 let accumulator = number;
 for(let func of functions){
     accumulator = func(accumulator);
 }
  return accumulator;
}

pipe(1,addOne, addOne)

