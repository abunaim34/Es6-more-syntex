const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 4500},
    {id: 3, name: 'mac', price: 165000},
]
// map
const names = products.map(products => products.name)
// console.log(names)
const prices = products.map(products => products.price)
// console.log(prices)

// forEach
// const id = products.forEach(p => console.log(p.id))

// filter
const expencive = products.filter(p => p.price > 50000)
// console.log(expencive)

// find
const appordable = products.find(p => p.price < 5000)
// console.log(appordable)


// reduce
const total = products.reduce((accumuletor, current) => accumuletor + current.price, 0)
console.log(total)