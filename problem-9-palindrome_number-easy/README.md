# 9. Palindrome Number 
Given an integer  `x`, return  `true`  if  `x`  is palindrome integer.

An integer is a  **palindrome**  when it reads the same backward as forward.

-   For example,  `121`  is a palindrome while  `123`  is not.

**Example 1:**

**Input:** x = 121
**Output:** true
**Explanation:** 121 reads as 121 from left to right and from right to left.

**Example 2:**

**Input:** x = -121
**Output:** false
**Explanation:** From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

**Example 3:**

**Input:** x = 10
**Output:** false
**Explanation:** Reads 01 from right to left. Therefore it is not a palindrome.

**Constraints:**

-   `-231 <= x <= 231 - 1`

**Follow up:** Could you solve it without converting the integer to a string?


## Solution 1 using TS

```ts
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

```

## Solution 2 using GO

```go
package main

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}
	number := x
	reverseNumber := 0
	mod := 10
	for number != 0 {
		lastDigit := number % mod
		number = number / 10
		reverseNumber = reverseNumber * 10
		reverseNumber = reverseNumber + lastDigit
	}
	return x == reverseNumber

}

func main() {
	isPalindrome(12321)
}

```