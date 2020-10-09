// Given five positive integers,
// find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    const sortedArr = arr.sort((a, b) => (a < b ? -1 : 1));
    const minSum = sortedArr.slice(0, 4).reduce((a, b) => a + b);
    const maxSum = sortedArr.slice(1, 5).reduce((a, b) => a + b);
    console.log(`${minSum} ${maxSum}`);
}
