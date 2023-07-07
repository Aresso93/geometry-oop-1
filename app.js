console.log('geometry');
// punto, segmento, numero

//                       x  y
const point1 = new Point(3, 4);
console.log(point1);
//----------------------------
const segment1 = new Segment(1, 1, 4, 5);
console.log(segment1);
console.log(segment1.length);
//----------------------------  A  |  B  |  C
const triangle1 = new Triangle(1, 1, 4, 5, 4, 1)
console.log(triangle1);
console.log(triangle1.perimeter);

console.log('-----------------');
// esercizio in classe
console.log(triangle1.area);

console.log(triangle1.isRectangle2());

const triangle2 = new Triangle(2, 2, 7, 3, 5, 12);
console.log(triangle2.isRectangle2());
// ---------



// model2 -----------------------
const client1 = new Client('pippo', 'de pippis', 'via pippolis 27')
// console.log(client1.toString());

const employee1 = new Employee('pluto', 'de pippis', 'animali');
// console.log(employee1.toString());

