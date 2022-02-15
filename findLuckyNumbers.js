// Write your code below this line.
function luckyNumbers(n) {
  let result = new Set();
  while (result.size < n) {
    let randomNum = Math.floor(Math.random() * n);
    result.add(randomNum);
  }
  //console.log(result)
  return result;
}

console.log(luckyNumbers(5));
