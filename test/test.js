const assert = require('assert');
const { 
  countWords,
  countSpaces,
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
