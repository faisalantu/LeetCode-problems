const isPalindrome = function (x: number) {
  //check negative
  if (x < 0) return false;

  const getReminder = (num: number) => {
    return num % 10;
  };

  let y = x;
  let temp = 0;
  while (y !== 0) {
    temp += getReminder(y);
    y = Math.floor(y / 10);
    if (y !== 0) temp = temp * 10;
  }
  return temp === x;
};
