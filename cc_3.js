// Task 1 - Product Price Management Scenario
// Declaring an array for "prices" with 5 values which will represent different gym prices
let prices = [10.99,15.99,21.99,25,30];

// This will show a new price to the array using .push() which allows us to do so. 
prices.push(26); //added new gym price

// Removing the first price from the array
prices.shift();

// Log the updated price list
console.log("Updated Gym Membership Prices:", prices);

// Task 2 - Modifying Customer Orders Scenario

// Declaring an array "orders" representing the quantity of creatine supplement ordered
let orders = [6, 9, 5, 7, 3];

// Increasing the third order quantity by 5 (customer requested an update to their order)
orders[2] += 5;

// Calculate the total number of all orders using .reduce() to sum the array values
let totalOrders = orders.reduce((total, qty) => total + qty, 0);


console.log("Updated Creatine Orders:", orders);
console.log("Total Creatine Ordered:", totalOrders);
