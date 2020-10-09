// This is a staircase of size n

//    #
//   ##
//  ###
// ####

// Its base and height are both equal to n
// It is drawn using # symbols and spaces.
// The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let row = [];
        let diff = n - i;
        for (let j = 0; j < diff; j++) {
            row.push(" ");
        }
        row.push("#".repeat(i));
        console.log(row.join(""));
    }
}
