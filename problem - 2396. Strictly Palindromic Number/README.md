# [2396. Strictly Palindromic Number](https://leetcode.com/problems/strictly-palindromic-number/)

An integer `n` is **strictly palindromic** if, for **every** base `b` between `2` and `n - 2` (**inclusive**), the string representation of the integer `n` in base `b` is **palindromic**.

Given an integer `n`, return `true` _if_ `n` _is **strictly palindromic** and_ `false` _otherwise_.

A string is **palindromic** if it reads the same forward and backward.

**Example 1:**
**Input:** n = 9
**Output:** false
**Explanation:** In base 2: 9 = 1001 (base 2), which is palindromic.
In base 3: 9 = 100 (base 3), which is not palindromic.
Therefore, 9 is not strictly palindromic so we return false.
Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.

**Example 2:**
**Input:** n = 4
**Output:** false
**Explanation:** We only consider base 2: 4 = 100 (base 2), which is not palindromic.
Therefore, we return false.

## Solution-1 in Typescript

```ts
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
```

## Solution-2 in Typescript

```ts
function isStrictlyPalindromic(n: number): boolean {
  for (let b = 2; b <= n - 2; b++) {
    let numInBase = n.toString(b);
    let left = 0;
    let right = numInBase.length - 1;
    while (left < right) {
      if (numInBase[left] !== numInBase[right]) {
        return false;
      }
      left++;
      right--;
    }
  }
  return true;
}
```

Instead of using `split()`, `reverse()` and `join()` method to check the palindrome of string in Solution 1, Solution 2 uses two pointers, one at the start and the other at the end of the string and checks the equality of the characters at these positions. If the characters are not equal, it returns false. If the characters are equal, it increments the left pointer and decrements the right pointer, and continues checking the equality of the characters until the left pointer is greater than the right pointer. This way it does not need to create a new array and a new string every iteration, which can improve the performance of the function especially if the number is large.