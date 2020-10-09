// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            neg++;
        } else if (arr[i] === 0) {
            zero++;
        } else if (arr[i] > 0) {
            pos += 1;
        }
    }
    console.log((pos / arr.length).toFixed(6));
    console.log((neg / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));
}
