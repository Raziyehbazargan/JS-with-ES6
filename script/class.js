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
