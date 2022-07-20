const classPractice2 = () => {
  // class User {
  //   name: string;
  //   age: number;

  //   constructor(name: string, age: number) {
  //     if (name === "") {
  //       throw new Error("名前は空にできません！");
  //     }
  //     this.name = name;
  //     this.age = age;
  //   }

  //   getMessage(message: string): string {
  //     return `${this.name} (${this.age}) 「${message}」`;
  //   }
  // }

  function createUser(name: string, age: number) {
    return (message: string) => {
      return `${name} (${age}) 「${message}」`
    }
  }

  const getMessage = createUser("uhyo", 26)
  // "uhyo (26) 「こんにちは」" と表示される
  console.log(getMessage("こんにちは"));
}

classPractice2()