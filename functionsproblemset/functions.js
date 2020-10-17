function isEven(x){
  if(x % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function Factorial(num){
  if (num === 0 || num === 1)
    return 1;
    for (let i = num-1 ; i>=1; i--) {
      num *= i;
    }
    return num;
}

function kebabToSnake(str){
 let str2 = str.replace('-','_')
  return str2;
}
isEven(6);
Factorial(5);
kebabToSnake('hey-there');
