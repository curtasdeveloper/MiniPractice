let reversedString = ""

export function reverseStringRecursively(str, index) {
    
    if (index >= 0) {
        reversedString += str[index]
        reverseStringRecursively(str, index-1)
    }

}
const string = "louise"
reverseStringRecursively(string, string.length-1)
console.log(reversedString)