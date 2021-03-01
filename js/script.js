// Train ticket price

// Asking for Km
var km = parseInt(prompt("Hello! How far would you like to travel? (Specify the amount of Km please)"));

// Checking whether the inserted number for km is an actual number
if ((isNaN(km)) && (!isNaN(age) && (age > 0))) {
    // Checking one time whether the input for km is an actual number
    km = prompt("Sorry, but we need an actual number");
    //Checking another time
} if (isNaN(km)) {
    km = alert("Mmm, we need an actual number (please do it again by reloading the page...)");
    //Checking that the amount of Km is not equal or less than 0
} else if (km <= 0) {
    alert("You think this is funny?");
} else {
    // Asking for age
    var age = parseInt(prompt("How old are you?"));
    // Checking that age is a number
    if (isNaN(age)) {
        age = prompt("This is not a valid number for your age I'm afraid... try again!");
    // Checking that age is not equal or less than 0
    } if (age <= 0) {
        alert("Nope, time to reload the page again");
    } else {
        // Price
        var price = km * 0.21;        
        // Calculating price
        if (age < 18) {
            // 20% discount
            price -= (price * 0.2);
        } else if (age >= 65) {
            // 40% discount
            price -= (price * 0.4);
        }
        // Displayed message
        document.getElementById("price").innerHTML = "Perfect! This is the amount to pay for your train ticket: " + (price.toFixed(2)) + "€";
    }
}