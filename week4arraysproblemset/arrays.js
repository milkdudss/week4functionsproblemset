function printReverse(arr) {
  for(let i = arr.length - 1; i >= 0; i--){
  console.log(arr[i])
  }
}


function isUniform(arr) {
  let first = arr[0]
  for(let i = 0; i < arr.length; i++){
    if (arr[0] !== arr[i]) {
      return false;
    }
  }
  return true;
}


function sumArray(arr) {
  let sumTotal =
      arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      })
  console.log(sumTotal)
}


function findMax(arr) {
  let max = arr[0]
  for(let i=0; i<=arr.length; i++) {
    if(arr[i] > max)
      max = arr[i];
  }
  console.log(max);
}

printReverse([1,2,3])
sumArray([1,2,3])
console.log(isUniform([1,2,1]));
findMax([1,2,3,4]);
