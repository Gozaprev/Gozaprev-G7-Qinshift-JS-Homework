function atmWithdraw() {
    let accountBalance = 5000; 
    let withdrawAmount = prompt("Enter the amount you want to withdraw:");
    withdrawAmount = Number(withdrawAmount);

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        console.log("Please enter a valid positive number.");
    } else if (withdrawAmount > accountBalance) {
        
        console.log("Not enough money.");
    } else {
        
        accountBalance -= withdrawAmount;
        console.log(`You have withdrawn ${withdrawAmount}.\nRemaining balance: ${accountBalance}`);
    }
}


atmWithdraw();
