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

export function countWords(inputString: string) {
  let splitWords = inputString.split(" ");
  return splitWords.length;
} 
export function countSpaces(inputString: string) {
  let splitWords = inputString.split(" ");
  return splitWords.length - 1;
}
