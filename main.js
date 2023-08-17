// My Account Details
let accountDetails = {
  dialCode: 123,
  accountBalance: 10000,
};

// My account name and pin prompt
let dialCode = +prompt("Bank USSD Code:");

// To Verify the name and PIN entered
if (dialCode !== accountDetails.dialCode) {
  alert("Invalid USSD Code.");
} else {
  // Prompt for operation
  let accountOperation = prompt(
    `PadiPay Bank,
          1. Check balance
          2. Transfer
          3. Airtime
          4. Pay Bills
          5. Buy Data`
  );
  if (accountOperation === "1") {
    alert(`Your current balance: $${accountDetails.accountBalance}`);
  } else if (accountOperation === "2") {
    // Transfer
    let transferAmount = +prompt("Enter the transfer amount:");
    if (transferAmount > 0 && transferAmount <= accountDetails.accountBalance) {
      let recipientAccount = prompt("Enter recipient's account number:");

      //Recipient Details object
      let recipientDetails = {
        accountName: "Curtis",
        accountNumber: "123456789",
      };

      if (recipientAccount === recipientDetails.accountNumber) {
        // My transfer
        accountDetails.accountBalance -= transferAmount;
        alert(
          `Transfer successful! Updated balance: $${accountDetails.accountBalance}`
        );
      } else {
        alert("Recipient account not found.");
      }
    } else {
      alert("Invalid transfer amount or insufficient balance.");
    }
  } else if (accountOperation === "3") {
    //Recharge Card
    let mobileNumber = prompt("Enter the mobile number:");
    let rechargeAmount = +prompt("Enter the recharge amount:");

    if (rechargeAmount > 0 && rechargeAmount <= accountDetails.accountBalance) {
      // recharge card
      accountDetails.accountBalance -= rechargeAmount;
      alert(
        `Recharge successful! Remaining balance: $${accountDetails.accountBalance}`
      );
    } else {
      alert("Invalid recharge amount or insufficient balance.");
    }
  } else if (accountOperation === "4") {
    // Pay for Cable Services
    let cableProvider = prompt("Enter the cable provider:");
    let subscriptionAmount = +prompt("Enter the subscription amount:");

    if (
      subscriptionAmount > 0 &&
      subscriptionAmount <= accountDetails.accountBalance
    ) {
      // subscription
      accountDetails.accountBalance -= subscriptionAmount;
      alert(
        `Payment for ${cableProvider} successful! Remaining balance: $${accountDetails.accountBalance}`
      );
    } else {
      alert("Invalid subscription amount or insufficient balance.");
    }
  } else {
    alert("Invalid Quick Teller option.");
  }  if (accountOperation === "5") {
    //
  } 
}