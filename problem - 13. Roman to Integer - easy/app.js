/**
 * @param {string} s
 * @return {number}
 */
let s = "MCMXCIV";
var romanToInt = function (s) {
  const map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);

  let sum = 0;
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(map.get(s.charAt(i)));
  }

  for (let i = s.length - 1; i >= 0; i--) {
      if (arr[i] > arr[i - 1]) {
      sum += arr[i] - arr[i - 1];
      i--;
    } else {
      sum += arr[i];
    }
  }
  console.log(sum);
  return sum;
};
romanToInt(s);
