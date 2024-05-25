//This one was the most difficult to solve at level 4 kyu, but thankfully I had previous knowledge of matices and determinants that helped me.
// It took me all day to solve, but now am more comftorable with 2D arrays, recursion, slice(), and splice()

// Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.
function determinant(m) {
    // return the determinant of the matrix passed in
    //store length of matrix
    let n = m.length;
    if (n === 1) return m[0][0]; //base case; returns single cell back as the determinant
    else if (n === 2) return (m[0][0] * m[1][1]) - (m[0][1] * m[1][0]); //recursion case; solves determinant for 2x2 matrix
    else { //otherwise reduce any bigger matrix to multiple 2x2 matrices
        let detM = 0; //initalize determinant to 0
        for (let i = 0; i < n; i++) { // loop through every row
            // matrix[column][row]
            let entry = m[0][i]; //grab current entry before it gets deleted
            //copy matrix, so original matrix doesn't get destroyed
            let minor = m.map(column => {
                return column.slice()
            }); 
            minor.splice(0, 1); //delete first column
            for (const column of minor) {
                column.splice(i, 1); // delete row of entry
            }
            if (i % 2 === 0) { //check if current entry is odd
            detM += entry * determinant(minor); // then add minor to complete cofactor
            } else {    // otherwise, if current entry is even
            detM -= entry * determinant(minor); // then subtract minor to complete cofactor
            }
        }
        return detM; //return total determinate
    }
  };


//  [ [ 5, 1, 4, 0 ], [ 1, 2, 4, 0 ], [ 0, 4, 1, 2 ], [ 3, 3, 1, 2 ] ]
  
  console.log(determinant([[5,1,4,0],[1,2,4,0],[0,4,1,2],[3,3,1,2]]));//-8