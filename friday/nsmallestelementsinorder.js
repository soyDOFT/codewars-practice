//Your task is to write a function that does just what the title suggests 
//(so, fair warning, be aware that you are not getting out of it just throwing a lame bas sorting method there) 
//with a list of integers and the expected number n of smallest elements to return.
//the number of elements to be returned cannot be higher than the list length;
//elements can be duplicated;
//in case of duplicates, just return them according to the original order.
function firstNSmallest(array, n){
    const sortedArray = array.toSorted((a,b) => a - b); //get sorted array
    const indices = []; // array to store indices
    const orderedSortedArray = []; // array to store solution
    for (let i = 0; i < n; i++) { // traverse sorted array to find smallest numbers
      indices.push(array.indexOf(sortedArray[i])); // add smallest numbers to indices array
    }
    indices.sort((a, b) => a - b); // sort indices array from earliest small number to latest
    for (const index of indices) { //traverse indices array
        orderedSortedArray.push(array[index]); // add smallest numbers using sorted indices array
    }
    return orderedSortedArray; //return solution
    
}
console.log(firstNSmallest([5, 1, 0, 3, 2], 3));
