const callbackPractice1 = () => {
  function map(array: number[], callback: (val: number) => number): number[] {
    const result: number[] = []
    for (const elm of array) {
      result.push(callback(elm))
    }
    return result
  }
  const data = [1, 1, 2, 3, 5, 8, 13]
  // mapは高階関数（コールバック関数を引数として受け取る関数）
  const result = map(data, (x) => x * 10);
  console.log(result)
}

callbackPractice1()