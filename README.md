# Submission of Sriwijaya University GDSC Backend Division

This project is an example implementation of a class structure based on the Object-Oriented Programming (OOP) concept for an online store management system. In this project, we have three main classes: User, Order, and Cart.

## User Class

The User class represents users of the online store. Each user has the following attributes:

- `id` (User ID, data type: integer)
- `name` (user's name, data type: string)
- `address` (user's address, data type: string)

This class has methods to display user information.

## Order Class

The Order class represents orders in the online store. Each order has the following attributes:

- `id` (Order ID, data type: integer)
- `orderDate` (date of the order, data type: date)
- `total` (total order price, data type: double)
- `user` (user who placed the order, data type: User object)

This class has methods to display order information.

## Cart Class

The Cart class represents a user's shopping cart. Each shopping cart has the following attributes:

- `id` (Cart ID, data type: integer)
- `items` (a list of items in the cart, data type: array or list)
- `user` (the user who owns the shopping cart, data type: User object)

This class has methods to add and remove items from the cart and to display cart information.

## Usage Example

Here is an example of how to use these classes:

```javascript
const User = require('./classes/User');
const Order = require('./classes/Order');
const Cart = require('./classes/Cart');

const user1 = new User(1, "John", "123 Example Street");
const order1 = new Order(101, "2023-10-22", 250.0, user1);
const cart1 = new Cart(201, [], user1);

const item1 = "Book";
const item2 = "Pencil";
cart1.addItem(item1);
cart1.addItem(item2);

console.log(user1.displayInfo());
console.log(order1.displayInfo());
console.log(cart1.displayInfo());
