// order
// products list
// number
// date
// user name 

let productList = []
let orderNumber = 0
let date = new Date()
let userName = ""

console.log("productList", productList, "orderNumber", orderNumber, "date", date, "userName", userName);
console.log(productList, orderNumber, date, userName);


// new object
let object = {}

console.log(object);


// new order
let newOrder = {
    products: [],
    number: 0,
    date: new Date(),
    userName: ""
}

console.log(newOrder);



// boolean variable
let isLightOn = true


// products task
let products = [
    {
        name: "Apple",
        price: 18,
        withSale: false,
        priceWithSale: 0,
    }, 
    {
        name: "Orange",
        price: 28,
        withSale: true,
        priceWithSale: 25,
    }, 
    {
        name: "Banana",
        price: 35,
        withSale: false,
        priceWithSale: 0,
    }, 
    {
        name: "Potato",
        price: 12,
        withSale: true,
        priceWithSale: 10,
    }, 
]

const index = 15
for(let i = 0; i < products.length; i++) {
    if(products[i].price < index) {
        console.log(products[i]);
    }
}