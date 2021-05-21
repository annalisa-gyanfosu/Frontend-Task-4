function checkYuGiOh(n) {
    if (!Number(n)) {
      const content = JSON.stringify(n);
      return `invalid parameter: "${content}"`;
    } else {
      let arrayNum = [];
      for (let i = 1; i <= n; i++) {
        if (i % 30 === 0) arrayNum.push("yu-gi-oh");
        else if (i % 15 === 0) arrayNum.push("gi-oh");
        else if (i % 10 === 0) arrayNum.push("yu-oh");
        else if (i % 6 === 0) arrayNum.push("yu-gi");
        else if (i % 2 === 0) arrayNum.push("yu");
        else if (i % 3 === 0) arrayNum.push("gi");
        else if (i % 5 === 0) arrayNum.push("oh");
        else arrayNum.push(i);
      }
      return arrayNum;
    }
  }
  
  console.log(checkYuGiOh(10));
  console.log(checkYuGiOh("5"));
  console.log(checkYuGiOh("fizzbuzz is meh"));
