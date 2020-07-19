"use strict";
exports.__esModule = true;
exports.countCharacters = exports.countOccurences = exports.countSpaces = exports.countWords = exports.countingStr = void 0;
exports.countingStr = {
    byWordsLength: 0,
    bySpacesLength: 0,
    countWords: function (inputString) {
        return 0;
    },
    countSpaces: function (inputString) {
        return 0;
    }
};
function countWords(inputString) {
    if (!inputString)
        return 0;
    var splitWords = inputString.split(" ");
    return splitWords.length;
}
exports.countWords = countWords;

function countSpaces(inputString) {
    if (!inputString)
        return 0;
    var splitWords = inputString.split(" ");
    return splitWords.length - 1;
}
exports.countSpaces = countSpaces;
function countCharacters(inputString, options) {
    if (options === void 0) { options = { withSpaces: true }; }
    if (!inputString)
        return 0;
    var inputCharacterSize = inputString.length;
    var inputSpaceCharacterSize = inputString.split(" ").length - 1;
    var inputCharacterSizeWithoutSpaces = inputCharacterSize - inputSpaceCharacterSize;
    if (options.withSpaces)
        return inputCharacterSize;
    return inputCharacterSizeWithoutSpaces;
}
exports.countCharacters = countCharacters;

function countOccurences(inputString, stringToMatch) {
    inputString += "";
    stringToMatch += "";
    if(stringToMatch.length <= 0)
        return (inputString.length + 1);
    
    var n = 0;
    var pos = 0;
    var step = 1

    while(true) {
        pos = inputString.indexOf(stringToMatch, pos);
        if(pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}
exports.countOccurences = countOccurences;
function countVowels(inputString) {
    if (!inputString)
        return 0;
    return (inputString.match(/[aeiou]/gi) || []).length;
}
exports.countVowels = countVowels;
