
function longestWord (string){
    let length = string.split(' ').map(word =>word.length)
    console.log(Math.max(...length))
}

longestWord("May the force be with you")
longestWord("The quick brown fox jumped over the lazy dog")


