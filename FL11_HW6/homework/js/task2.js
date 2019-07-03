// Your code goes here
let aSide = parseInt(prompt('Enter value for a'))
let bSide = parseInt(prompt('Enter value for b'))
let cSide = parseInt(prompt('Enter value for c'))

if(aSide + bSide < cSide || aSide + cSide < bSide || bSide + cSide < aSide){
    console.log('Triangle doesn’t exist');
}else if(aSide === bSide && aSide === cSide){
    console.log('Eequivalent triangle');
}else if(aSide === bSide || aSide === cSide || bSide === cSide){
    console.log('Isosceles triangle')
}else{
    console.log('Normal triangle')
}