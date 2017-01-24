class Vehicle {
  constructor(description, wheels) {
    this.description = description;
    this.wheels = wheels;
  }
  describeYourself() {
    console.log(`I am a ${this.description} with ${this.wheels} wheels`);
  }
}

var coolSkiVan = new Vehicle('cool ski van', 4);
coolSkiVan.describeYourself();

class SemiTruck extends Vehicle {
  constructor() {
    super('semi truck', 18);
    //super is going to refer to Vehicle class then we can set the properties
  }
}

var groceryStoreSemi = new SemiTruck();
groceryStoreSemi.describeYourself();
