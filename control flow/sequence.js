function findSubsequences(arr) {
    let maxNum = -1;
    for (let num of arr) {
      if (num > maxNum) {
        maxNum = num;
      }
    }
  
    let present = [];
    for (let i = 0; i <= maxNum; i++) {
      present[i] = false;
    }
  
    let count = 0;
    let subsequences = [];
  
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      present[num] = true;
  
      let allPresent = true;
      for (let j = 1; j <= maxNum; j++) {
        if (!present[j]) {
          allPresent = false;
          break;
        }
      }
  
      if (allPresent) {
        subsequences.push(i + 1);
        for (let j = 0; j <= maxNum; j++) {
          present[j] = false;
        }
        count++;
      }
    }
  
    if (count === 0) {
      // Calculate the minimum numbers needed
      let minToAdd = maxNum - count;
      return [minToAdd];
    }
  
    return [count, subsequences];
  }
  
  // Sample input
  const n = 6;
  const arr = [1, 1, 2, 2, 3, 4];
  
  const result = findSubsequences(arr);
  if (result.length === 1) {
    console.log(result[0]);
  } else {
    const [count, subsequences] = result;
    console.log(count);
    console.log(subsequences.join(' '));
  }