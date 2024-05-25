//I was very satisfied after this one, especially since it was just two lines. I also learned more about .sort()

//Given an array of integers your solution should find the smallest integer.
//For example:
//Given [34, 15, 88, 2] your solution will return 2
//Given [34, -345, -1, 100] your solution will return -345
//You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt(arr) {
    //Sort the array from lowest to greatest
    arr.sort((a, b) => a - b)
    //return first element in the sorted array
    return arr[0];
}

console.log(findSmallestInt([5, 3, 9, 12]));