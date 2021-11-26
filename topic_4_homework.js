//submit homework to the repository that you created for git lecture

// 1. Compute the exponent of a number (using recursion);
//8^2 = 8 x 8 = 64

function computeExponent(base, exponent) {
  if (exponent == 0) return 1;
  else return base * power(base, exponent - 1);
}

// 2. Write functions min and max that will find min and max number in array using apply

const data = [0, -1, 5, 100];

function findMinMax() {
  const min = Math.min.apply(null, data);
  const max = Math.max.apply(null, data);

  return [min, max];
}

console.log(findMinMax());

// 3. write a function x`xx` that will receive as argument ownerName
//    and return a string with car registration number, branch and color.
//    Please make examples for three different cars

const car1 = {
  number: 12345,
  brand: "Ford",
  color: "red",
};
const car2 = {
  number: 12346,
  brand: "Mersedes",
  color: "black",
};
const car3 = {
  number: 12345,
  brand: "BMW",
  color: "silver",
};

const info = {
  displayCarDetails: function () {
    return `this is ${this.brand} of ${this.color} color with number: ${this.number} `;
  },
};

console.log(info.displayCarDetails.call(car3));

// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that

I found nothing to fix .Ruslan Gula

// function greet (person) {
//   if (person.name ==  'amy' ) {
//     return 'hey amy'
//   } else {
//     return 'hey arnold'
//   }
// }
// const amy = {name: 'amy'}
// greet(amy)

// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)

//solution 1
const wrapper = (i) => setTimeout(() => console.log(i), 0);
for (var i = 0; i < 4; i++) {
wrapper(i);
 }


// solution 2


for (var i = 0; i < 5; i++) {
    (function(i){ return  setTimeout(function () {
      console.log("count ", i);
    }, 3000);})(i);
  }
