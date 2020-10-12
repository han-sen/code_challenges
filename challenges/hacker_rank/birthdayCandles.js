// You are in charge of the cake for a child's birthday.
// You have decided the cake will have one candle for each year of their total age.
// They will only be able to blow out the tallest of the candles.
// Count how many candles are tallest.

function birthdayCakeCandles(candles) {
    let max = 0;
    const candleObj = {};
    for (const height of candles) {
        if (candleObj[height]) {
            candleObj[height]++;
        } else {
            candleObj[height] = 1;
        }
    }
    for (let freq in candleObj) {
        if (candleObj[freq] > max) {
            max = candleObj[freq];
        }
    }
    return max;
}
