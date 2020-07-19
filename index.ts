interface CountCharactersOption {
  withSpaces: boolean;
}

export function countWords(inputString: string) {
  inputString += "";
  if (!inputString) return 0;
  let splitWords = inputString.split(" ");
  return splitWords.length;
} 
export function countSpaces(inputString: string) {
  inputString += "";
  if (!inputString) return 0;
  let splitWords = inputString.split(" ");
  return splitWords.length - 1;
}
export function countCharacters(inputString: string, options: CountCharactersOption = { withSpaces: true }) {
  inputString += "";
  if (!inputString) return 0;
  let inputCharacterSize = inputString.length;
  let inputSpaceCharacterSize = inputString.split(" ").length - 1;
  let inputCharacterSizeWithoutSpaces = inputCharacterSize - inputSpaceCharacterSize;
  if (options.withSpaces) return inputCharacterSize;
  return inputCharacterSizeWithoutSpaces;
}
export function countVowels(inputString: string) {
  inputString += "";
  if (!inputString) return 0;
  return (inputString.match(/[aeiou]/gi) || []).length;
}
export function countOccurences(inputString, stringToMatch) {
  inputString += "";
  stringToMatch += "";

  if (!inputString || !stringToMatch) return 0;
  if(stringToMatch.length <= 0)
    return 0;

  let countOfOccurences = 0;
  let position = 0;

  while(true) {
    position = inputString.indexOf(stringToMatch, position);
    if(position >= 0) {
      ++countOfOccurences;
      position += 1;
    } else break;
  }
  return countOfOccurences;
}

