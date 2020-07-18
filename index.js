"use strict";
exports.__esModule = true;
exports.countVowels = exports.countCharacters = exports.countSpaces = exports.countWords = void 0;
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
function countVowels(inputString) {
    if (!inputString)
        return 0;
    return (inputString.match(/[aeiou]/gi) || []).length;
}
exports.countVowels = countVowels;
