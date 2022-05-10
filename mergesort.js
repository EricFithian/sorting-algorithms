function merge(left, right) {
    let sortedArr = [] // the sorted items will go here
    while (left.length && right.length) {
        // Insert the smallest item into sortedArr
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    // We now will almost certainly have some left in the right 
    // or left array since when one breaks the above does meaning 
    // we just push those values in after as they're the largest. 
    // Use the spread operator.
    return [...sortedArr, ...left, ...right]
}

function mergeSort(arr) {
    // Base case. with only a length of 1, we don't need to sort
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    // Recursive calls
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([8, 12, 2, -2, -85, 81]))