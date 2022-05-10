function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // Choose the first element in our unsorted subarray since nothing left of index 0
        let current = arr[i];
        // The last element of our sorted subarray
        let j = i-1; 
        while ((j > -1) && (current < arr[j])) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    console.log(arr)
    return arr;
}

insertionSort([-65, 243, 31, -25, 79, 0, -11, 299, 66])