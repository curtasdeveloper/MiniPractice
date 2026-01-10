export function twoPointersPalindromeChecker(str) {
    str = str.split(" ").join("").toLowerCase() // for spaces and cases
    let isPalindrome = true
    let leftPointer = 0
    let rightPointer = str.length - 1
    
    while (leftPointer != str.length) {
        if (str[leftPointer] !== str[rightPointer]) {
            isPalindrome = false
            break;
        }
        leftPointer+=1
        rightPointer-=1
    }

    return isPalindrome
}

export function reversedStringPalindrome(str) {
    str = str.split(" ").join("").toLowerCase() // for spaces and cases
    let reversedString = ""

    for (let i = str.length-1; i > 0; i--) {
        reversedString += str[i]
    }

    return reversedString !== str
}

let palindrome_text = "alila"
let notPalindromeText = "ulirat"

console.log(twoPointersPalindromeChecker(palindrome_text), "Must be true")
console.log(twoPointersPalindromeChecker(palindrome_text), "Must be true")
console.log(twoPointersPalindromeChecker(notPalindromeText), "Must be false")
console.log(twoPointersPalindromeChecker(notPalindromeText), "Must be false")