// script.js
function calculateInterest() {
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let time = document.getElementById("time").value;

    if (principal === "" || rate === "" || time === "") {
        alert("Please enter all values!");
        return;
    }

    let interest = (principal * rate * time) / 100;
    document.getElementById("result").innerHTML = `Interest: ₹${interest.toFixed(2)}`;
}