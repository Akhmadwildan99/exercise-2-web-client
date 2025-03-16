import {isPalindrome} from "../../src/ts/palindrome";

test('abba should palindrome word', () => {
    expect(isPalindrome('abba')).toBeTruthy();
});

test('abbas should palindrome word', () => {
    expect(isPalindrome('abbas')).toBeFalsy();
});