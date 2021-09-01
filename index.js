const tmpArray = [2, 4, 5];
console.log(squareSum(tmpArray));

function squareSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + Math.pow(numbers[i], 2);
  }

  return sum;
}
