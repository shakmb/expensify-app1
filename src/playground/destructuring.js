// object destructuring

// const person = {
//     name: 'Tom',
//     age: 27,
//     location: {
//         city: 'london',
//         temp: 20
//     }
// };

// const { name: firstName = 'anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'my booky wook',
//     author: 'Ryan Jones',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'self published' } = book.publisher;

// console.log(`${publisherName}`);





// array destructuring

const address = ['12 south juniper street', 'Birmingham', 'Midlands', '19146'];

const [, city, state = 'Manchester', zip] = address;

console.log(`You are in ${city} ${state}`);


const item = ['coffee (hot)', '£2', '£2.50', '£2.75'];

const [itemName, , mediumPrice,] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);