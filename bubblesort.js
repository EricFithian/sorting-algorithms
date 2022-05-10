// Creating the bubble sort function
function bubbleSort(arr){
    // You have to compare each index against others and move them 
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < ( arr.length - i -1 ); j++){
            // Checking if the item at present iteration is greater than the next iteration
            // Notice we're comparing the j values nothing with the i. The i is to ensure we
            // do this to each and every value. That's the reason for the j value
            if(arr[j] > arr[j+1]){
                // If the condition is true then swap them
                // We need a temporary variable to store the value as it gets overwritten
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    // Print the sorted array and then return it
    console.log(arr);
    return arr;
}

// This is our unsorted array
var arr = [-65, 243, 31, -25, 79, 0, -11, 299, 66];
// First iteration 
// Now pass this array to the bubbleSort() function
bubbleSort(arr);