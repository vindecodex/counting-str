"use strict";
exports.__esModule = true;
exports.countCharacters = exports.countSpaces = exports.countWords = exports.countingStr = void 0;
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
