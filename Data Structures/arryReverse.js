// You are given an array of integers, [1,2,3,4,2,4,98,8,54,7,88,9]
// Your task is to reverse the order they appear, you need to reverse the array in place


let arr = [1,2,3,4,2,4,98,8,54,7,88,9]
    //               leright
    
//=> Task in to reverse using an inbuilt function

// console.log(arr.reverse())

// Task in to reverse in place(perform the operation directly on the elements of the array)
let left = 0
let right = arr.length - 1

while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    // let temp = arr[left]

    // arr[left] = arr[right]
    // arr[right] = temp

    left ++
    right --
}

console.log(arr)