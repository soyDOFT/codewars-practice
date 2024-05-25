//This one was difficult and caused a lot of headaches. 
// I felt relief completing this one.

// Once upon a time, on a way through the old wild mountainous west,…
//… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". 
//Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
// Going to one direction and coming back the opposite direction right away is a needless effort. 
// Since this is the wild west, with dreadful weather and not much water,
// it's important to save yourself some energy, otherwise you might die of thirst!
// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable,
// better stay to the same place! So the task is to give to the man a simplified version of the plan.
// A better plan in this case is simply:
// ["WEST"]
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
function dirReduc(arr){
    //loop through elements
    for (let i = 0; i < arr.length; i++) {
        //check for neighbor opposites and delete them
        deleteOpposites(i);
    }
    
    function deleteOpposites(i) {
    //compare element with neightbor element for if they're opposites
    if ((arr[i] === "NORTH" && arr[i+1] === "SOUTH") || (arr[i] === "SOUTH" && arr[i+1] === "NORTH") || (arr[i] === "EAST" && arr[i+1] === "WEST") || (arr[i] === "WEST" && arr[i+1] === "EAST")) {
        //if opposites pop both
        arr.splice(i, 2);
        //recheck new neighbors
        deleteOpposites(i);
        //recheck last neighbors
        deleteOpposites(i - 1);
    }
    //otherwise do nothing
    return 0;
    }
    //send back new fixed array
    return arr;
  }