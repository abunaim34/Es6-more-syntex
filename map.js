/* map ==> loops through each element of the array and
do the operation that you passed in the call back
funtion and hold the result from each operation in
an array and finally returns you the arrat.
*/

const numbers = [15, 8, 5, 7]

// option 1
const doubled = [];
for(const num of numbers){
    const double = num * 2;
    doubled.push(double)
}
// console.log(doubled)

// option 2
function doubleIt(num){
    return num * 2;
}

const result = numbers.map(doubleIt)
// console.log(result)

// option 3
const double2 = n => n * 2;

const output = numbers.map(double2)
// console.log(output)

// option 4
const output2 = numbers.map(n => n * 2)
console.log(output2)