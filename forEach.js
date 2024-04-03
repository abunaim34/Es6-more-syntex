const numbers = [1, 2, 6, 15]

// option 1
// const result = numbers.forEach(n => console.log(n))
// console.log(result)

// option 2
const result2 = numbers.forEach(n => {
    n * 5
})
// console.log(result2)


function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ]));