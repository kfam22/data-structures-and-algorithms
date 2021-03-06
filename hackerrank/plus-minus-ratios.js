// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example

// There are  elements, two positive, two negative and one zero. Their ratios are 2/5 , 2/5 and 1/5. Results are printed as:

// 0.400000
// 0.400000
// 0.200000

function plusMinus(arr) {
    let p = arr.filter(num => num > 0);
    let n = arr.filter(num => num < 0);
    let z = arr.filter(num => num === 0);
    
    let pRatio = p.length / arr.length;
    let nRatio = n.length / arr.length;
    let zRatio = z.length / arr.length;
    
    console.log(pRatio.toFixed(6));
    console.log(nRatio.toFixed(6));
    console.log(zRatio.toFixed(6));
}