function getMaxSubSum(arr) {
    let max = 0;
    let currentMax = 0;

    for (let num of arr) {
        currentMax += num;
        max = Math.max (max, currentMax);
        if (currentMax < 0) {
            currentMax = 0;
        }
    }

    return max;
}