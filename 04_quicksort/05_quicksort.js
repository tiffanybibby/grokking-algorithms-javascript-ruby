// Quick array sorting O(n log n)

function quicksort(array) {
  if (array.length < 2) {
    return array // base case, arrays with 0 or 1 element are already "sorted"
  }
    let pivot = array[0] // recursive case
    let less = array.slice(1).filter(function(num) {
      return num <= pivot // sub-array of all the elements less than the pivot
    })
    let greater = array.slice(1).filter(function (num) {
      return num > pivot  // sub-array of all the elements greater than the pivot
    })
  return quicksort(less).concat([pivot], quicksort(greater))
}

console.log(quicksort([10, 5, 2, 3])); // [2, 3, 5, 10]