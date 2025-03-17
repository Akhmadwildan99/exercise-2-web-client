function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    return isPalindromeUtil(s, left, right);
}

function isPalindromeUtil(s, left, right) {
    // Base case
    if (left >= right) 
        return true;

    // If the characters at the current positions are not
    // equal, return 0 (not a palindrome)
    if (s[left] !== s[right]) {
        return false;
    }

    // Move left pointer to the right and right pointer to
    // the left
    return isPalindromeUtil(s, left + 1, right - 1);
}

module.exports = {isPalindrome};