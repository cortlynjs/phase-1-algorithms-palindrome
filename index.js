function isPalindrome(word) {
  // Convert the string to lowercase
  word = word.toLowerCase();
  // Loop through the string from both ends
  for (let i = 0, j = word.length - 1; i < j; i++, j--) {
    // If the characters at each end don't match, it's not a palindrome
    if (word[i] !== word[j]) {
      return false;
    }
  }
  // If we get through the whole string without finding any non-matching characters, it's a palindrome
  return true;
}

// Test Cases
console.log("Expecting: true");
console.log(isPalindrome("racecar"));

console.log("");

console.log("Expecting: true");
console.log(isPalindrome("abba"));

console.log("");

console.log("Expecting: true");
console.log(isPalindrome("a"));

console.log("");

console.log("Expecting: false");
console.log(isPalindrome("robot"));

console.log("");

console.log("Expecting: false");
console.log(isPalindrome("ab"));

console.log("");

console.log("Expecting: false");
console.log(isPalindrome("Palindrome"));

console.log("");

console.log("Expecting: true");
console.log(isPalindrome("MaDaM"));

console.log("");

console.log("Expecting: true");
console.log(isPalindrome("Mom"));

console.log("");

console.log("Expecting: false");
console.log(isPalindrome("12321"));

console.log("");

console.log("Expecting: false");
console.log(isPalindrome("123abba321"));

console.log("");

console.log("Expecting: true");
console.log(isPalindrome("a man a plan a canal panama"));

// Export the function for testing
module.exports = isPalindrome;
