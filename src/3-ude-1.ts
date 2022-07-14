const dataProceed = () => {
  type User = {
    name: string;
    age: number;
    premiumUser: boolean;
  }

  const data: string = `
  uhyo,26,1
  John Smith,17,0
  Mary Sue,14,1
  `;

  // ここにコードを足す
  const users: User[] = [];
  // console.log(data)
  const lines = data.split('\n')
  for (const line of lines) {
    if (line == '' || line === '  ') {
      continue;
    }
    const [name, ageString, premiumUserString] = line.split(',')
    const age = Number(ageString)
    const premiumUser = premiumUserString === "1"
    users.push({
      name,
      age,
      premiumUser
    })
  }

  for (const user of users) {
    if (user.premiumUser) {
      console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
    } else {
      console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
    }
  }
}

dataProceed()