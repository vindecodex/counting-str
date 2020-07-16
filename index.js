"use strict";
exports.__esModule = true;
exports.countSpaces = exports.countWords = exports.countingStr = void 0;
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
    var splitWords = inputString.split(" ");
    return splitWords.length;
}
exports.countWords = countWords;
function countSpaces(inputString) {
    var splitWords = inputString.split(" ");
    return splitWords.length - 1;
}
exports.countSpaces = countSpaces;
