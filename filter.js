/* filter selects elements based on a condition 
and returns an array with the elements that fulfilled
the condition.*/

const numbers = [19, 26, 65, 18, 9, 20];

const selected = numbers.filter(p => p > 15)
const selecte = numbers.filter(p => p > 25)
// console.log(selected)
// console.log(selecte)

// odd
const odd = numbers.filter(p => p % 2 === 1)
// console.log(odd)

const friends = ['abu', 'naim', 'salma', 'farabi', 'sweety']

const oddFriend = friends.filter(frnd => frnd.length > 4)
console.log(oddFriend)