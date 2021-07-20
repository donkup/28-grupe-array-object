class Person {
    constructor(data) {
        this.personData = data;

        this.children = this.personData.children;
        this.cars = this.personData.cars;
    }
    fullName() {
        console.log(`${this.personData.firstname} ${this.personData.lastname}`);
    }
    intro() {
        console.log(`Hi, my name is ${this.personData.firstname} and i am ${this.personData.age} years old`);

    }
    firstChild() {
        console.log(`${this.children[0].firstname} ${this.children[0].lastname} (${this.children[0].age})`);


    }
    lastChild() {
        const paskVaikas = this.children[this.children.length - 1]
        console.log(`${paskVaikas.firstname} ${paskVaikas.lastname}(${paskVaikas.age})`);

    }
    firstCar() {
        console.log(`${this.cars[0].brand} ${this.cars[0].model} (${this.cars[0].color})`);

    }
    lastCar() {
        const paskMasina = this.cars[this.cars.length - 1]
        console.log(`${paskMasina.brand} ${paskMasina.model} (${paskMasina.color})`);

    }
    apartmentPrice() {
        const apartment = this.personData.adress;
        console.log(`${this.personData.firstname} has an apartment for ${apartment.price} ${apartment.currency}.`);

    }
    chidren() {
        console.log(`This is a children of ${this.personData.firstname} ${this.personData.lastname} `);
        let vaikai = 0;
        for (let i = 0; i < this.children.length; i++) {
            const children = this.children[i];

            console.log(`${++vaikai}) ${children.firstname} ${children.lastname} (${children.age})`);

        }
    }
    aliveChildren() {
        let gyvi = 0;
        for (let i = 0; i < this.children.length; i++) {
            const children = this.children[i];
            if (children.alive) {
                gyvi++;
            }
        }
        console.log(`${this.personData.firstname} ${this.personData.lastname} has only ${gyvi} children alive.`);

    }
    autopark() {
        console.log(`This is ${this.personData.firstname} cars:`);

        let masinos = 0;
        for (let i = 0; i < this.cars.length; i++) {
            const car = this.cars[i];

            console.log(`${++masinos}. ${car.brand} ${car.model} (${car.color})`);

        }

    }
    wherePersonLive() {
        const namai = this.personData.adress;
        console.log(`${this.personData.firstname} is living at ${namai.city} ${namai.street} ${namai.houseNumber}`);
    }
    carPrice(index) {
        const id = index;
        console.log(`***${this.cars[id].brand} ${this.cars[id].model} is purchased for ${this.cars[id].price} ${this.cars[id].currency} ***`);

    }
    totalSpentForCars(spauzdinti = true) {
        let totalPriceCar = 0;
        for (let i = 0; i < this.cars.length; i++) {
            const car = this.cars[i];
            if (car.currency === 'Litas') {
                totalPriceCar += car.price / 3.4528;
            } else {
                totalPriceCar += car.price;
            }

        }
        if (spauzdinti) {
            console.log(`/// ${this.personData.firstname} has spent ${totalPriceCar.toFixed(2)} Euros for his cars`);
        }

        return totalPriceCar;
    }
    totalSpentForApartments(spauzdinti = true) {
        const apartments = this.personData.adress;
        if (spauzdinti) {
            console.log(`${this.personData.firstname} has spent ${apartments.price} ${apartments.currency} for his apartments.`)
        };
        return apartments.price;
    }
    totalSpendings() {
        const gyvenimoIslaidos = this.totalSpentForApartments(false) + this.totalSpentForCars(false);
        console.log(`${this.personData.firstname} has spent ${gyvenimoIslaidos.toFixed(2)} Euros totaly`);

    }
}

module.exports = Person;