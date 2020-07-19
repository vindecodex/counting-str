### Counting STR (Counting String)

![npm](https://img.shields.io/npm/v/counting-str?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/vindecodex/counting-str?style=flat-square)
![GitHub](https://img.shields.io/github/license/vindecodex/counting-str?style=flat-square)
[![Build status](https://ci.appveyor.com/api/projects/status/ujaw4dlquf5sknbk?svg=true)](https://ci.appveyor.com/project/vindecodex/counting-str)
![npm](https://img.shields.io/npm/dw/counting-str)

#### Working Status
:construction: Under Construction :construction:

##### Installation

`npm i counting-str`

##### Usage

Count Words
```JavaScript
const { countWords } = require('counting-str');
countWords("Hello World");
```

Count Characters
```JavaScript
const { countCharacters } = require('counting-str');
countCharacters("Hello World");
```

Count Characters without including spaces
```JavaScript
countCharacters("Hello World", { withSpaces: false });
```

Count an occurence of a Character/String in another String
```JavaScript
const { countOccurences } = require('counting-str');
countOccurences("Hello World", "l");
```

|Name           | Arguments                     |  Info                                                   |
|---------------|-------------------------------|---------------------------------------------------------|
|countWords     | String                        | returns # of words in a string                          |
|countSpaces    | String                        | returns # of spaces in a string                         |
|countCharacters| Object { withSpaces: boolean }| withSpaces: true returns # of characters included space |
|countOccurences| (String, String)              | returns occurences count in a string                    |
Count Vowels
```JavaScript
const { countVowels } = require('counting-str');
countVowels("Hello World");
```

Count Spaces
```JavaScript
const { countSpaces } = require('counting-str');
countSpaces("Hello World");
```

#### :handshaking: Feel free to open a pull request to add more features.
- make clone
- create a pull request
- feel free to open an issue
- OPEN FOR BEGINNERS AND NEW CONTRIBUTORS

### How to Contribute ?
[GUIDE FOR CONTRIBUTORS](/CONTRIBUTE-GUIDE.md)
