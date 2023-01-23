function isStrictlyPalindromic(n: number): boolean {
  for (let b = 2; b <= n - 2; b++) {
    let numInBase = n.toString(b);
    console.log(numInBase);
    if (numInBase !== numInBase.split("").reverse().join("")) {
      return false;
    }
  }
  return true;
}

isStrictlyPalindromic(9)
