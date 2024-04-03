class Vihicle{
    constructor(name, price){
        this.name = name;
        this.price = price
    }
    move(){
        console.log('gari chole na cole na cole re')
    }
}

class bus extends Vihicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price)
        this.seat = seat;
        this.ticketPrice = ticketPrice
    }
}

class truk extends Vihicle {
    constructor(name, price, load, caring){
        super(name, price,)
        this.load = load;
        this.caring = caring;
    }
}