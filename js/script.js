// Train ticket price
// Km
var km = prompt("Hello! How far would you like to travel? (Specify the amount of Km please)");

// Age
var age = prompt("How old are you?");

// Total price: 0.21€ per Km
var price = km * 0.21;

if (age < 18) {
    // 20% discount
    price = price - (price * 0.2);
} else if (age >= 65) {
    // 40% discount
    price = price - (price * 0.4);
}

// Displayed message
document.getElementById("price").innerHTML = "Perfect! This is the amount to pay for your train ticket: " + price + "€";