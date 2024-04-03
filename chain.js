// data acces
// array
const data = [{id: 1, name: 'abul', address: 'kochu khet'}]

// console.log(data[0].address);


// object
const products = {
    count: 5000,
    data: [
        {id: 1, name: 'mackbook', price: 5000},
        {id: 2, name: 'lenovo', price: 2000}
    ]
}
// console.log(products.data[1].price)

const user = {
    id: 5000,
    name: 'abu naim',
    address: {
        city: 'dhaka',
        street: {
            first: 'noakhali',
            second: 'senbag',
            third: 'khajuriya'
        }
    }
}
// console.log(user.address.street.third)


const user2 ={
    id: 52222,
    name: 'alisha malisha',
    address: {
        gram: 'khajuri',
        para: 'sordar para'
    }
    
}
console.log(user.address.street?.second)
console.log(user2.address.street?.second)