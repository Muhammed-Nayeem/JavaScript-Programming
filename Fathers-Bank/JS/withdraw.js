//Withdraw Js code:
document.getElementById("withdraw-btn").addEventListener("click", function () {
  //Withdraw money:
  let newWithdrawValue = getInputValueById("withdraw");
  let previousWithdrawValue = getTextElementsValueById("withdraw-money");
  let totalWithdrawValue = newWithdrawValue + previousWithdrawValue;
  setTextElementValueById("withdraw-money", totalWithdrawValue);

  //Total Balance with Withdraw:
  let previousTotalBalance = getTextElementsValueById("total-money");
  let totalBalance = previousTotalBalance - newWithdrawValue;
  setTextElementValueById("total-money", totalBalance);
});
