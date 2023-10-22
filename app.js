const User = require('./classes/User')
const Order = require('./classes/Order')
const Cart = require('./classes/Cart')


const user1 = new User(1, "Husadahts", "Jalan Indralaya No. 123");
const order1 = new Order(101, "2023-10-28", 123.0, user1);
const cart1 = new Cart(201, [], user1);

const item1 = "Mistar";
const item2 = "Tas";
cart1.addItem(item1);
cart1.addItem(item2);

console.log(user1.displayInfo());
console.log(order1.displayInfo());
console.log(cart1.displayInfo());
