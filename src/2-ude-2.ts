const fizzbuzz2 = () => {
  let count: number = 1;
  let res = "";
  while (count <= 100) {
    const judge3: number = count % 3
    const judge5: number = count % 5
    if(judge3 === 0 && judge5 === 0) {
      res += "FizzBuzz "
    } else if (judge3 === 0) {
      res += "Fizz "
    } else if (judge5 === 0) {
      res += "Buzz "
    } else {
      res += `${String(count)} `
    }
    count++;
  }
  console.log(res)
}

fizzbuzz2();