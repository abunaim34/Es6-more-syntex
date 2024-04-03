class persion{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleep now ${this.name} `)
    }
}
const kodom = new persion('kodom ali', 21);
console.log(kodom)
kodom.sleep()

const badam = new persion('badam ali', 25)
console.log(badam)
badam.sleep()