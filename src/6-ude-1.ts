type Option<T> = {
  tag: "some"
  value: T;
} | {
  tag: "none"
}

function isSome<T>(obj: Option<T>): obj is { tag: "some"; value: T } {
  return obj.tag === "some";

}

function showNumberIfExists(obj: Option<number>): void {
  if (isSome(obj)) {
    console.log(obj.value)
  }
  // if (obj.tag === "some") {
  //   console.log(obj.value)
  // }
}

const four: Option<number> = {
  tag: "some",
  value: 4
}
const nothing: Option<number> = {
  tag: "none"
}

showNumberIfExists(four)
showNumberIfExists(nothing)