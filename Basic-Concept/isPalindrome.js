/* 4 ways of checking if a input:str is a palindrome 
    - two pointers 
    - loop
    - recursion
    - reverse() method
*/ 

export function twoPointersPalindromeChecker(str) {
    str = str.split(" ").join("").toLowerCase() // for spaces and cases
    let leftPointer = 0
    let rightPointer = str.length - 1
    
    while (leftPointer < rightPointer) {
        if (str[leftPointer] !== str[rightPointer]) {
            return false
        }
        leftPointer+=1
        rightPointer-=1
    }

    return true
}

export function reversedStringPalindromeUsingForLoop(str) {
    str = str.split(" ").join("").toLowerCase() // for spaces and cases
    let reversedString = ""

    for (let i = str.length-1; i >= 0; i--) {
        reversedString += str[i]
    }   

    return reversedString === str
}

export function reversedStringPalindromeUsingReverseMethod(str) {
    const cleaned = str.split(" ").join("").toLowerCase()
    return cleaned === cleaned.split("").reverse().join("")
}

export function reversedStringPalindromeUsingRecursion(str) {
    const cleaned = str.split(" ").join("").toLowerCase()

    const recursivelyReverse = (text) =>  {
        if (text.length === 1) {
            return text
        }
        return recursivelyReverse(text.substring(1)) + text[0]
    }
    
    const reversed_str = recursivelyReverse(cleaned)
    return cleaned === reversed_str
}

let palindrome_text = "alila"
let notPalindromeText = "ulirat"

console.log(twoPointersPalindromeChecker(palindrome_text), "Must be true")
console.log(reversedStringPalindromeUsingForLoop(palindrome_text), "Must be true")
console.log(reversedStringPalindromeUsingReverseMethod(palindrome_text), "Must be true")
console.log(reversedStringPalindromeUsingRecursion(palindrome_text), "Must be true")
+
console.log(twoPointersPalindromeChecker(notPalindromeText), "Must be false")
console.log(reversedStringPalindromeUsingForLoop(notPalindromeText), "Must be false")
console.log(reversedStringPalindromeUsingReverseMethod(notPalindromeText), "Must be false")
console.log(reversedStringPalindromeUsingRecursion(notPalindromeText), "Must be false")
