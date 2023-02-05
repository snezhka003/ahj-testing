import {
  cutStr, getArr, separat, check, getSumArr,
} from './Utils';

export default class Valid {
  constructor(str) {
    this.str = str;
  }

  checkValid(sum) {
    const arrOrigin = getArr(this.str);
    const checking = Number(arrOrigin[arrOrigin.length - 1]);

    if ((sum + checking) % 10 === 0) {
      return true;
    }
    return false;
  }

  start() {
    const cutString = cutStr(this.str);
    const arrStr = getArr(cutString);
    const revArr = arrStr.reverse();
    const { oddArr, evenArr } = separat(revArr);
    const oddItemArr = check(oddArr);
    const sum = getSumArr(oddItemArr) + getSumArr(evenArr);
    const result = this.checkValid(sum);
    return result;
  }
}
