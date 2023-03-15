//Deposit JS Code:
document.getElementById("deposit-btn").addEventListener("click", function () {
  //Deposits money:
  let newDepositValue = getInputValueById("deposit");
  let previousDepositValue = getTextElementsValueById("deposit-money");
  let totalDepositValue = newDepositValue + previousDepositValue;
  setTextElementValueById("deposit-money", totalDepositValue);

  //Total Balance with Deposit:
  let previousTotalBalance = getTextElementsValueById("total-money");
  let totalBalance = newDepositValue + previousTotalBalance;
  setTextElementValueById("total-money", totalBalance);
});
