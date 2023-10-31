function findFirstNonRepeatingIndex(str) {
    const charCount = {};
  
    // Count character frequencies
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Find the first non-repeating character
    for (let i = 0; i < str.length; i++) {
      if (charCount[str[i]] === 1) {
        return i;
      }
    }
  
    return -1; // No non-repeating character found
  }
  
  // Sample input
  const T = 2;
  const testCases = ['abc', 'aa'];
  
  for (let i = 0; i < T; i++) {
    const str = testCases[i];
    const result = findFirstNonRepeatingIndex(str);
    console.log(result);
  }