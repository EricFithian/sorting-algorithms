function startingStair(arr, lowestStart) {
    // I want to track how many stairs it has gone up or down
    // I want to have one variable that tracks the lowest number
    let lowest = 0;
    // Lowest tracks the lowest it has been
    // stairsJumped will track the total no matter what (my sum)
    let stairsJumped = 0;
    for(let i = 0; i < arr.length; i++) {
        stairsJumped += arr[i];
        if(stairsJumped < lowest) lowest = stairsJumped;
    }
    return lowestStart - lowest;
}

console.log(startingStair([-5, 2, 6, -9])) //return 7
console.log(startingStair([2, 5, -3, 8])) //return 1
console.log(startingStair([376, -1001, 92, 451, -10, 92])) //return 626