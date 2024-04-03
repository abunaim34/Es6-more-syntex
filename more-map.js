const numbers = [12, 15, 24, 18]

// multiply
const double = numbers.map(num => num * 2)
// console.log(double)

const sum = numbers.map(num => num + 5)
// console.log(sum)

const divide = numbers.map(num => num / 2)
// console.log(divide)


const friends = ['abu', 'naim', 'salma', 'sweety']

// length
const lengths = friends.map(frnd => frnd.length)
// console.log(lengths)

const firstLetter = friends.map(frnd => frnd[0])
console.log(firstLetter)