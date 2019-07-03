// Your code goes here
const divisionValue = 2;
let a1 = parseInt(prompt('Enter a1'));
let a2 = parseInt(prompt('Enter a2'));
let b1 = parseInt(prompt('Enter b1'));
let b2 = parseInt(prompt('Enter b2'));
let c1 = parseInt(prompt('Enter c1'));
let c2 = parseInt(prompt('Enter c2'));

if( (a1+b1)/divisionValue === c1 && (a2+b2)/divisionValue === c2){
    console.log(true);
}else{
    console.log(false);
}