const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 4500},
    {id: 3, name: 'mac', price: 165000},
]
// has some properties, method,
class product{
    country = 'bangladesh'

    speak(talk){
        console.log(`talking abut ${talk} `)
    }

    constructor(name){
        this.name = name
    }
}
// option 1
const lenovo = new product('le le lenovo')
// console.log(lenovo); 
// lenovo.speak('oba kita koro')


// recap class
class teacher{
    constructor(name, fon){
        this.name = name;
        this.fon = fon;
    }
    lecture(){
        console.log('hujur poraiteche')
    }
}
const jakir = new teacher('jakir saheb', 'fekah');
const seraj = new teacher('seraj saheb', 'nahu')
// console.log(jakir)
// console.log(seraj)
