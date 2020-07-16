interface CountingString {
  byWordsLength: number;
  bySpacesLength: number;
  countWords: (inputString: string)=>number;
  countSpaces: (inputString: string)=>number;
}

export const countingStr: CountingString = {
  byWordsLength: 0,
  bySpacesLength: 0,
  countWords: (inputString: string) => {
    return 0;
  },
  countSpaces: (inputString: string) => {
    return 0;
  },
};

interface CountCharactersOption {
  withSpaces: boolean;
}

export function countWords(inputString: string) {
  let splitWords = inputString.split(" ");
  return splitWords.length;
} 
export function countSpaces(inputString: string) {
  let splitWords = inputString.split(" ");
  return splitWords.length - 1;
}
export function countCharacters(inputString: string, options: CountCharactersOption) {
  let inputCharacterSize = inputString.length;
  let inputSpaceCharacterSize = inputString.split(" ").length - 1;
  let inputCharacterSizeWithoutSpaces = inputCharacterSize - inputSpaceCharacterSize;
  if (options.withSpaces) return inputCharacterSize;
  return inputCharacterSizeWithoutSpaces;
}
