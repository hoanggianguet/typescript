class Vehicle {


    constructor(public color: string){
        this.color = color;
    }

    public honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle{
    constructor(public wheels: number, color: string){
        super("red");
    }
    private drive(): void{
        console.log("XXXXXXXXXXX")
    }

    startDriving(): void{
        this.drive();
    }
}

const car = new Car(4,'orange');
car.startDriving();
car.color
