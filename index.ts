interface CountCharactersOption {
  withSpaces: boolean;
  withNewLine: boolean;
}

export function countWords(inputString: string) {
  if (!inputString) return 0;
  let splitWords = inputString.split(' ');

  return splitWords.length;
}
export function countSpaces(inputString: string) {
  if (!inputString) return 0;
  let splitWords = inputString.split(' ');
  return splitWords.length - 1;
}
export function countCharacters(
  inputString: string,
  options: CountCharactersOption = { withSpaces: true, withNewLine: true }
): any {
  if (!inputString) return 0;
  let inputCharacterSize = inputString.length;
  let inputSpaceCharacterSize = inputString.split(' ').length - 1;
  let inputCharacterSizeWithoutSpaces =
    inputCharacterSize - inputSpaceCharacterSize;
  let totalNewLines = inputString.split(/\n/).length - 1;

  if (options.withSpaces && options.withNewLine) return inputCharacterSize;
  if (!options.withSpaces && options.withNewLine)
    return inputCharacterSizeWithoutSpaces;
  if (options.withSpaces && !options.withNewLine)
    return inputCharacterSize - totalNewLines;
}

export function countVowels(inputString: string) {
  if (!inputString) return 0;
  return (inputString.match(/[aeiou]/gi) || []).length;
}
