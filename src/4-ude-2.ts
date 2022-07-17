const funcFizzBuzz2 = () => {
  const getFizzBuzzString = (i: number):string => {
    if(i % 3 === 0 && i % 5 === 0) {
      return "FizzBuzz"
    } else if (i % 3 === 0) {
      return "Fizz"
    } else if (i % 5 === 0) {
      return "Buzz"
    } else {
      return String(i)
    }
  }

  const sequence = (start: number, stop: number):number[] => {
    const arr: number[] = []
    for (let i = start; i <= stop; i++) {
      arr.push(i)
    }
    return arr
  }

  for (const i of sequence(1, 100)){
    const message = getFizzBuzzString(i);
    console.log(message)
  }
}

funcFizzBuzz2()