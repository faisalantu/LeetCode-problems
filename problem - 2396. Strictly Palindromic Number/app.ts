function isStrictlyPalindromic(n: number): boolean {
  for (let b = 2; b <= n - 2; b++) {
    const baseString = n.toString(b);
    if (baseString !== baseString.split("").reverse().join("")) {
      return false;
    }
  }
  return true;
}

isStrictlyPalindromic(4);
