export default class Valid {
  constructor(str) {
    this.str = str;
  }

  cutStr() {
    const end = this.str.length - 1;
    const str = this.str.substring(0, end);
    return str;
  }

  getArr(str) {
    const arr = str.split('');
    return arr;
  }

  reverseStr(arr) {
    return arr.reverse();
  }

  separat(arr) {
    const oddArr = [];
    const evenArr = [];
    let item;

    for (let i = 0; i < arr.length; i += 1) {
      if (i % 2 === 0) {
        item = arr[i];
        oddArr.push(item);
      } else {
        item = arr[i];
        evenArr.push(item);
      }
    }

    const obj = {
      oddArr,
      evenArr,
    };

    return obj;
  }

  check(arr) {
    const oddItemArr = [];

    arr.forEach((el) => {
      let item = el * 2;
      if (item > 9) {
        item -= 9;
        oddItemArr.push(item);
      } else {
        oddItemArr.push(item);
      }
    });

    return oddItemArr;
  }

  getSumArr(arr) {
    let sum = 0;
    arr.forEach((el) => {
      const item = Number(el);
      sum += item;
    });
    return sum;
  }

  checkValid(sum) {
    const arrOrigin = this.getArr(this.str);
    const checking = Number(arrOrigin[arrOrigin.length - 1]);

    if ((sum + checking) % 10 === 0) {
      return true;
    }
    return false;
  }

  start() {
    const cutString = this.cutStr();
    const arrStr = this.getArr(cutString);
    const revArr = this.reverseStr(arrStr);
    const { oddArr, evenArr } = this.separat(revArr);
    const oddItemArr = this.check(oddArr);
    const sum = this.getSumArr(oddItemArr) + this.getSumArr(evenArr);
    const result = this.checkValid(sum);
    return result;
  }
}
