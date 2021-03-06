// This problem follows the Sliding Window pattern and is quite similar to Longest Substring with same Letters after Replacement. The only difference is that, in the problem, we only have two characters (1s and 0s) in the input arrays.

// Following a similar approach, we’ll iterate through the array to add one number at a time in the window. We’ll also keep track of the maximum number of repeating 1s in the current window (let’s call it maxOnesCount). So at any time, we know that we can have a window with 1s repeating maxOnesCount time, so we should try to replace the remaining 0s. If we have more than ‘k’ remaining 0s, we should shrink the window as we are not allowed to replace more than ‘k’ 0s.

// time: O(n)
// space: O(1)

function length_of_longest_substring(arr, k) {
    let windowStart = 0,
      maxLength = 0,
      maxOnesCount = 0;
  
    // Try to extend the range [windowStart, windowEnd]
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      if (arr[windowEnd] === 1) {
        maxOnesCount += 1;
      }
  
      // current window size is from windowStart to windowEnd, overall we have a maximum 
      // of 1s repeating a maximum of 'maxOnesCount' times, this means that we can have a
      //  window with 'maxOnesCount' 1s and the remaining are 0s which should replace 
      // with 1s. Now, if the remaining 0s are more than 'k', it is the time to shrink 
      // the window as we are not allowed to replace more than 'k' Os.
      if ((windowEnd - windowStart + 1 - maxOnesCount) > k) {
        if (arr[windowStart] === 1) {
          maxOnesCount -= 1;
        }
        windowStart += 1;
      }
  
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
  }
  
  
  console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
  console.log(length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));