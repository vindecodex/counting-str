const assert = require('assert');
const { 
  countWords,
  countSpaces,
  countCharacters,
  countVowels
} = require('../index.js');

const input = "Hello, World!, This is a test";

describe(`Input: ${input}`, null);

describe('Count Words', function() {
  it('Should return 6', function() {
    assert.equal(countWords(input), 6);
  });
});

describe('Count Spaces', function() {
  it('Should return 5', function() {
    assert.equal(countSpaces(input), 5);
  });
});

describe('Count Characters with spaces', function() {
  it('Should return 29', function() {
    assert.equal(countCharacters(input), 29); 
  });
});

describe('Count Characters without spaces', function() {
  it('Should return 24', function() {
    assert.equal(countCharacters(input, { withSpaces: false}), 24);
  });
});

describe('Count Vowels', function () {
  it('Should return 7', function () {
    assert.equal(countVowels(input), 7);
  });
});