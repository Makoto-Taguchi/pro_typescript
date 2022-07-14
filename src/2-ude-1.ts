let count: number = 1;
while (count <= 100) {
  const judge3: number = count % 3
  const judge5: number = count % 5
  if(judge3 === 0 && judge5 === 0) {
    console.log("FizzBuzz")
  } else if (judge3 === 0) {
    console.log("Fizz")
  } else if (judge5 === 0) {
    console.log("Buzz")
  } else {
    console.log(count)
  }
  count++;
}