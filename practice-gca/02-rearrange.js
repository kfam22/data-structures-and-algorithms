// You are given an array of integers a. A new array b is generated by rearranging the elements of a in the following way:

//     b[0] is equal to a[0];
//     b[1] is equal to the last element of a;
//     b[2] is equal to a[1];
//     b[3] is equal to the second-last element of a;
//     b[4] is equal to a[2];
//     b[5] is equal to the third-last element of a;
//     and so on.

// Your task is to determine whether the new array b is sorted in strictly ascending order or not.

function solution(a) {
    let b = [];
    let start = 0;
    let end = a.length - 1
    
    if(a === b) return true;
    
    while(start <= end){
        b.push(a[start]);
        if(start !== end){
        b.push(a[end]);}
        start++;
        end--;
    }
    
    
    // sort and check sorted for duplicates (if duplicate, then it's not strictly ascending)
    let sorted = [...b].sort((a,b) => a - b)
    for(let i = 0; i < sorted.length; i++){
        let current = sorted[i];
        let next = sorted[i + 1];
        if(next === current) return false
    }
    // return true if b equals sorted and false if not
    return arraysEqual(b, sorted)
}

// helper to check if arrays are equal
function arraysEqual(arr1, arr2){
    return Array.isArray(arr1) 
    && Array.isArray(arr2)
    && arr1.length === arr2.length
    && arr1.every((val, idx) => val === arr2[idx])
}