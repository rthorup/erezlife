'use strict'
const fs = require('fs');


class Polygon {
  constructor(measurement) {
    this.measurement = measurement;
  }
  returnStatement(shape, p, a) {
    console.log(`A ${shape} wtih side length ${this.measurement} has a perimeter of ${p.toFixed(2)} and an area of ${a.toFixed(2)}`);
  }
}

class Square extends Polygon{
  findPerimeter() {
    let perimeter = this.measurement * 4;
    return perimeter;
  }
  findArea() {
    let area = Math.PI * this.measurement * this.measurement
    return area;
  }
}

class Circle extends Polygon{
  findCircumfrence() {
    let circumfrence = 2 * Math.PI * this.measurement;
    return circumfrence
  }
  findArea() {
    let area = Math.PI * (this.measurement * this.measurement)
    return area;
  }
}

class Triangle extends Polygon{
  findPerimeter() {
    let perimeter = this.measurement * 3;
    return perimeter;
  }
  findArea() {
    let s = (this.measurement * 3)/2
    let area = Math.sqrt(s * ((s - this.measurement) * (s - this.measurement) * (s - this.measurement)));
    return area;
  }
}

class Pentagon extends Polygon {
  findPerimeter(){
    let perimeter = this.measurement * 5;
    return perimeter;
  }
  findArea() {
    let area =(Math.sqrt(5 * (5 + 2 * (Math.sqrt(5)))) * this.measurement * this.measurement) / 4;
    return area;
  }
}


fs.readFile('shapes.csv', 'utf8', function (err, data) {
    let arr = data.split(/\r?\n/)
    arr.forEach((group) => {
      let pair = group.split(',');
      let numberCheck = parseInt(pair[1]);

      if(typeof(pair[1]) !== 'string' || isNaN(numberCheck)) {
        console.log('Invalid input. Please check csv file and try again');
        return;
      }
      let perimeter = 0
      let area = 0;
      switch(pair[0].toLowerCase()) {
        case 'circle':
          let circle = new Circle(pair[1])
          perimeter = circle.findCircumfrence();
          area = circle.findArea();
          console.log(circle.returnStatement('circle',perimeter,area));
          break;
        case 'square':
          let square = new Square(pair[1])
          perimeter = square.findPerimeter();
          area = square.findArea();
          console.log(square.returnStatement('square',perimeter,area));
          break;
        case 'pentagon':
          let pentagon = new Pentagon(pair[1]);
          perimeter = pentagon.findPerimeter();
          area = pentagon.findArea();
          console.log(pentagon.returnStatement('pentagon',perimeter,area));
          break;
        case 'triangle':
          let triangle = new Triangle(pair[1]);
          perimeter = triangle.findPerimeter();
          area = triangle.findArea()
          console.log(triangle.returnStatement('triangle',perimeter,area));
          break;
        default:
          console.log('Invalid input. Please check csv file and try again');
          break;

      }
    })
});
