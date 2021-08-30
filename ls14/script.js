let numberList = [-45, -59, 10, 0, -200, 50, 10]

let min = numberList[0]
for(let i = 0; i <= numberList.length - 1; i++) {
    if(numberList[i] < min) {
        min = numberList[i]
    }
}

console.log(min);

let max = numberList[0]
for(let i = 0; i <= numberList.length - 1; i++) {
    if(numberList[i] > max) {
        max = numberList[i]
    }
}

console.log(max);

// 60 * 1 = 60
// ...
// 60 * 90 = ...
let arr = []
for(let i = 1; i <= 90; i++) {
    if((i <= 10 && i >= 1) || (i >= 50 && i <= 90)) {
        arr.push(60 * i)
        console.log(`60 * ${i} = ${60 * i}`);
    }
}
console.log(arr);

let sum = 0
for(let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i]
}

// [1, 10] or [50, 90)
