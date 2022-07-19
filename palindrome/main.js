function isPalindrome(str){
    let oneWord = str.split('').reverse('').join('')
    let secondWord = str.split('').join('')
    if(oneWord == secondWord){
        return true
    } else {
        return false
    }
}
console.log(isPalindrome('mama'))