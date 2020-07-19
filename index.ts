interface CountCharactersOption {
  withSpaces: boolean;
}

export function countWords(inputString: string) {
  if (!inputString) return 0;
  let splitWords = inputString.split(" ");
  return splitWords.length;
} 
export function countSpaces(inputString: string) {
  if (!inputString) return 0;
  let splitWords = inputString.split(" ");
  return splitWords.length - 1;
}
export function countCharacters(inputString: string, options: CountCharactersOption = { withSpaces: true }) {
  if (!inputString) return 0;
  let inputCharacterSize = inputString.length;
  let inputSpaceCharacterSize = inputString.split(" ").length - 1;
  let inputCharacterSizeWithoutSpaces = inputCharacterSize - inputSpaceCharacterSize;
  if (options.withSpaces) return inputCharacterSize;
  return inputCharacterSizeWithoutSpaces;
}
export function countVowels(inputString: string) {
  if (!inputString) return 0;
  return (inputString.match(/[aeiou]/gi) || []).length;
}
