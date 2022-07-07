type Option2<T> = {
  tag: "some"
  value: T;
} | {
  tag: "none"
}

function mapOption<T, U>(obj: Option2<T>, callback: (value: T) => U): Option2<U> {
  switch (obj.tag) {
    case "some":
      return {
        tag: "some",
        value: callback(obj.value)
      }
    case "none":
      return {
        tag: "none"
      }
  }
}

function doubleOption(obj: Option2<number>) {
  return mapOption(obj, x => x * 2);
}
const four2: Option2<number> = {
  tag: "some",
  value: 4
}
const nothing2: Option2<number> = {
  tag: "none"
}

console.log(doubleOption(four2));
console.log(doubleOption(nothing2));