// const numberData = [10, 50, 30, 10, -5, -199, 53, 84, 10, -5, -199, 53, 84, 50, 30, 10, -5, -199, 84, 10, -5, -199, 53, 84, 50]

// task 1
const fromRange = 5
const toRange = 12

for(let i = fromRange; i <= toRange; i++) {
    console.log(i);
}

// task 2
const fromRangeElement = document.getElementById("from") 
const toRangeElement = document.getElementById("to")
const buttonElement = document.getElementById("btn")

buttonElement.addEventListener('click', (e) => {
    e.preventDefault()

    let fromRangeValue = Number(fromRangeElement.value)
    let toRangeValue = Number(toRangeElement.value)
    if(!fromRangeValue || !toRangeValue) {
        console.log('error value');
    }

    console.log('fromRangeValue', fromRangeValue, 'toRangeValue', toRangeValue);
    for(let i = fromRangeValue; i <= toRangeValue; i++) {
        console.log(i);
    }
})
