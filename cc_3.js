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


// Task 3 - Employee Performance Tracking

// Declaring an object "employee" with key details about an employee's performance
let employee = {
    name: "Sunny Man", // Employee's name
    role: "Data Analyst", // Employee's job title
    performanceScore: 2, // Initial performance score
    isActive: true // Employment status
};
// Update the performanceScore
employee.performanceScore = 3;

// Adding a new property "promotionEligible"
employee.promotionEligible = employee.performanceScore >= 4; // made employee only elgible for promotion if he scores a 4 or higher

// Log the updated employee object
console.log("Updated Employee Performance:", employee);


// Task 4 - Customer Feedback Record
// Declarimg an array "feedback" containing customer feedback objects
let feedback = [
    { customerName: "Dia Son", feedbackText: "Great product!", rating: 5 },
    { customerName: "Neil Jia", feedbackText: "Quality is okay and a bit pricey.", rating: 2 },
    { customerName: "Adam Fessler", feedbackText: "Fast shipping, decent quality.", rating: 4 }
];

// Add a new feedback object to the array (new  review)
feedback.push({ customerName: "Raymond Keen", feedbackText: "Fast shipping and great product", rating: 5 });

// Update Array of feedbacks
console.log("Customer Feedback Records:", feedback);

// Task 5 - Inventory Management System

// Declaring an object "inventory" with product details
let inventory = {
    itemName: "Godzilla Pre-Workout",
    stockCount: 500,
    price: 56,
    
    // Calculate total value of stock on hand
    calculateTotalValue: function() {
        return this.stockCount * this.price;
    }
};

// Log inventory details and total stock value
console.log("Inventory Details:", inventory);
console.log("Total Inventory Value:", inventory.calculateTotalValue());