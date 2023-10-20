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
	isPalindrome(1111)
}