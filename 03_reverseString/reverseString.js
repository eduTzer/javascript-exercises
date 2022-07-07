const reverseString = function(word) {
    let wordArray = word.split('');
    let finalWord = ''
    let reverseWord = wordArray.reverse(); 
    return reverseWord.join('');
};

// Do not edit below this line
module.exports = reverseString;
