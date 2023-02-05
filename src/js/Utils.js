export function cutStr(string) {
  const end = string.length - 1;
  const str = string.substring(0, end);
  return str;
}

export function getArr(str) {
  const arr = str.split('');
  return arr;
}

export function separat(arr) {
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

export function check(arr) {
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

export function getSumArr(arr) {
  let sum = 0;
  arr.forEach((el) => {
    const item = Number(el);
    sum += item;
  });
  return sum;
}
