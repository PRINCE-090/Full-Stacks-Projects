let balance = 1000;

function deposit() {
    let amount = document.getElementById("amount").value;
    let message = document.getElementById("message");

    if (amount <= 0) {
        message.innerText = "Enter a valid amount";
        return;
    }

    balance += Number(amount);
    document.getElementById("balance").innerText = balance;
    message.innerText = "Amount deposited successfully";
}

function withdraw() {
    let amount = document.getElementById("amount").value;
    let message = document.getElementById("message");

    if (amount <= 0) {
        alert("Enter a valid amount")
        return;
    }

    if (amount > balance) {
        alert("Insufficient Balance")
        return;
    }

    balance -= Number(amount);
    document.getElementById("balance").innerText = balance;
    message.innerText = "Amount withdrawn successfully";
}
