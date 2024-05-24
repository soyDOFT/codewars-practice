function findSmallestInt(arr) {
    //Sort the array from lowest to greatest
    arr.sort((a, b) => a - b)
    //return first element in the sorted array
    return arr[0];
}

console.log(findSmallestInt([5, 3, 9, 12]));