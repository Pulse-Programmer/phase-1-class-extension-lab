class Polygon {
  constructor(intArray) {
    this.array = intArray;
  }

  get countSides() {
    return this.array.length;
  }

  get perimeter() {
    return this.array.reduce((acc, side) => acc + side, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.array[0] < this.array[1] + this.array[2]) {
      if (this.array[1] < this.array[0] + this.array[2]) {
        if (this.array[2] < this.array[0] + this.array[1]) {
          return true;
        }
      }
    }

    return false;
  }
}

class Square extends Polygon {
  get isValid() {
    let filterArray = this.array.filter((side) => side === this.perimeter / 4);

    return filterArray.length === 4;
  }

  get area() {
    return (this.perimeter / 4) * (this.perimeter / 4);
  }
}
