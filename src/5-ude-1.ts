const classPractice1 = () => {
  class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      if (name === "") {
        throw new Error("名前は空にできません！");
      }
      this.name = name;
      this.age = age;
    }

    // createUser() {
    //   if (this.name === "") {
    //     throw new Error("名前は空にできません！");
    //   }
    //   return {
    //     name: this.name,
    //     age: this.age
    //   };
    // }

    getMessage(message: string): string {
      return `${this.name} (${this.age}) 「${message}」`;
    }
  }

  const uhyo = new User("uhyo", 26);
  // "uhyo (26) 「こんにちは」" と表示される
  console.log(uhyo.getMessage("こんにちは"));
}

classPractice1()