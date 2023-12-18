// [x] [Exercise 1] trimProperties copies an object trimming its properties
function trimProperties(obj) {
  /**
   * @param {object} obj - an object with properties that are strings
   * @returns {object} - a copy of the object with strings trimmed
   *
   * EXAMPLE
   * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
   */
  // ✨ implement
  const result = {};
  for (let prop in obj) {
    result[prop] = obj[prop].trim();
  }
  return result;
}

// [x] [Exercise 2] trimPropertiesMutation trims in place the properties of an object
function trimPropertiesMutation(obj) {
  /**
   * @param {object} obj - an object with properties that are strings
   * @returns {object} - the same object with strings trimmed
   *
   * EXAMPLE
   * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
   */
  // ✨ implement
  for (let prop in obj) {
    obj[prop] = obj[prop].trim();
  }
  return obj;
}

// [x] [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
function findLargestInteger(integers) {
  /**
   * @param {object[]} integers - an array of objects
   * @returns {number} - the largest integer
   *
   * EXAMPLE
   * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
   */
  // ✨ implement
  let largest = integers[0].integer;
  integers.forEach((obj) => {
    if (obj.integer > largest) {
      largest = obj.integer;
    }
  });
  return largest;
  // integers[0].integer === 1
  // [
  //   {
  //     integer: 1
  //   },
  //   {
  //     integer: 3
  //   },
  //   {
  //     integer: 2
  //   }
  // ]
}

// [x] [Exercise 4A] Counter creates a counter
class Counter {
  /**
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    // ✨ initialize whatever properties are needed
    this.count = initialNumber;
  }

  /**
   * [x] [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  countDown() {
    // ✨ implement
    return this.count > 0 ? this.count-- : this.count;
  }
}

// [x] [Exercise 5A] Seasons creates a seasons object
class Seasons {
  constructor() {
    // ✨ initialize whatever properties are needed
    this.seasons = ["summer", "fall", "winter", "spring"];
    this.currentSeason = 0; //this will map to first position in array
  }

  // [x] [Exercise 5B] Seasons.prototype.next returns the next season
  next() {
    /**
     * @returns {string} - the next season starting with "summer"
     *
     * EXAMPLE
     * const seasons = new Seasons()
     * seasons.next() // returns "summer"
     * seasons.next() // returns "fall"
     * seasons.next() // returns "winter"
     * seasons.next() // returns "spring"
     * seasons.next() // returns "summer"
     */
    // ✨ implement
    const result = this.seasons[this.currentSeason];
    this.currentSeason === 3 ? (this.currentSeason = 0) : ++this.currentSeason;

    return result;
  }
}

// [x] [Exercise 6A] Car creates a car object
class Car {
  /**
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0; // car initializes with zero miles
    this.tank = tankSize; // car initializes full of gas
    this.tankSize = tankSize;
    this.mpg = mpg;
    // ✨ initialize whatever other properties are needed
  }

  // [x] [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
  drive(distance) {
    /**
     * @param {string} distance - the distance we want the car to drive
     * @returns {number} - the updated odometer value
     *
     * EXAMPLE
     * const focus = new Car('focus', 20, 30)
     * focus.drive(100) // returns 100
     * focus.drive(100) // returns 200
     * focus.drive(100) // returns 300
     * focus.drive(200) // returns 500
     * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
     */
    // ✨ implement
    const milesCanDrive = this.tank * this.mpg;
    if (distance <= milesCanDrive) {
      this.odometer = this.odometer + distance;
      this.tank = this.tank - distance / this.mpg;
    } else {
      this.odometer = this.odometer + milesCanDrive;
      this.tank = 0;
    }
    return this.odometer;
  }

  // [ ] [Exercise 6C] Adds gallons to the tank
  refuel(gallons) {
    /**
     * @param {number} gallons - the gallons of fuel we want to put in the tank
     * @returns {number} - the miles that can be driven after refueling
     *
     * EXAMPLE
     * const focus = new Car('focus', 20, 30)
     * focus.drive(600) // returns 600
     * focus.drive(1) // returns 600 (no distance driven as tank is empty)
     * focus.refuel(99) // returns 600 (tank only holds 20)
     */
    // ✨ implement
  }
}

// [ ] [Exercise 7] Asynchronously resolves whether a number is even
function isEvenNumberAsync(number) {
  /**
   * @param {number} number - the number to test for evenness
   * @returns {promise} - resolves true if number even, false otherwise
   *
   * EXAMPLE
   * isEvenNumberAsync(2).then(result => {
   *    // result is true
   * })
   * isEvenNumberAsync(3).then(result => {
   *    // result is false
   * })
   */
  // ✨ implement
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
};
