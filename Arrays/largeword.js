function findLongestWordLength(str) {
 
    return Math.max(...str.split(" ").map(word => word.length))
}

let str = "The quick brown fox over the lazy dog"
console.log(findLongestWordLength(str));