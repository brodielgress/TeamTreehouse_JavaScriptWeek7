// function isAdult( age ) {
//     return age && age >= 18;
// }

// console.log(isAdult(9));

function countToFive(start = 1) {
       for (let i = start; i <= 5; i++) {
        console.log(i);
    }
}

// countToFive();

function greet(name) {
    name && console.log('Hey, ' + name + ' :)');
}

greet('person');