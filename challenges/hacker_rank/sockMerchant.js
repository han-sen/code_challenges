// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers describing the colors  of the socks in the pile.

// Return the total number of matching pairs of socks that Alex can sell.

function sockMerchant(n, ar) {
    const sockObj = {};
    let total = 0;
    ar.forEach((x) => {
        if (sockObj[x]) {
            sockObj[x]++;
        } else {
            sockObj[x] = 1;
        }
    });
    Object.values(sockObj).forEach((x) => {
        total += Math.floor(x / 2);
    });
    return total;
}
