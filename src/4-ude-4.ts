const callbackPractice2 = () => {
  function map<T, U>(array: T[], callback: (val: T) => U): U[] {
    const result: U[] = []
    for (const elm of array) {
      result.push(callback(elm))
    }
    return result
  }
  const data = [1, -3, -2, 8, 0, -1]
  // mapは高階関数（コールバック関数を引数として受け取る関数）
  const result: boolean[] = map(data, (x) => x >= 0);
  console.log(result)
}

callbackPractice2()