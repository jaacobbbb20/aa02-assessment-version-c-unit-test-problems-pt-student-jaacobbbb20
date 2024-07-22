/***********************************************************************
Write a function `leastFrequentLetter(string)` that will take a
string as an argument and return the character that appears the
least often. In case of a tie, return any character with the
lowest count. The string will have at least one character.

Examples:

leastFrequentLetter("mississippi") // "m"
leastFrequentLetter("ananab") // "b"
leastFrequentLetter("Cheese") // "C", "h", or "s"
***********************************************************************/

function leastFrequentLetter(string) {
  
  const characterCount = {};

  for (const char of string) {
    characterCount[char] = (characterCount[char] || 0) + 1;
  }

  let leastFrequentChar = null;
  let minFrequency = Infinity;

  for (const char in characterCount) {
    const count = characterCount[char];
    if (count < minFrequency) {
      minFrequency = count;
      leastFrequentChar = char;
    }
  }

  return leastFrequentChar;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = leastFrequentLetter;
