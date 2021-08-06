console.log(5 > 10); // false
console.log(5 <= 10); // true

// false - boolean
// 1 - int - number

console.log(true && false); // false
console.log(5 <= 10 && 10 > 3);  // true

console.log(true || false); // true
console.log(2 < 1 || 2 == 0);
console.log(2 != 1); // true

let result = 2 < 1

console.log(result);


let userName = 'qwe' // 6

console.log(userName.length); // 6

if(userName.length >= 6) {
    console.log('is bigger or equal');
} else if (userName.length == 4) {
    console.log('is 4');
} else {
    console.log('is less');
}

let color = 'black'

if(color == 'blue') {
    console.log('is black');
} else if(color == 'red') {
    console.log('is red');
} else if (color == 'blue') {
    console.log('is red');
} else {
    console.log('is sth else');
}