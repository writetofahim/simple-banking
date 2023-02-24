function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmount = parseFloat(inputField.value);
  inputField.value = "";
  return inputAmount;
}
function UpdateTotal(totalId, inputAmount) {
  const total = document.getElementById(totalId);
  const totalAmount = parseFloat(total.innerText);
  const newTotal = totalAmount + inputAmount;
  total.innerText = newTotal;
}
function updateBalance(inputAmount, isAdd) {
  const balanceField = document.getElementById("balance-total");
  const balanceAmount = parseFloat(balanceField.innerText);
  let newBalance;
  if (isAdd == true) {
    newBalance = balanceAmount + inputAmount;
  } else {
    newBalance = balanceAmount - inputAmount;
  }
  balanceField.innerText = newBalance;
}

//handle deposit event
document.getElementById("deposit-btn").addEventListener("click", function () {
  const inputAmount = getInputValue("deposit-input");
  if (isNaN(inputAmount) || inputAmount <= 0) {
    alert("Please enter a valid amount");
    return;
  }
  UpdateTotal("deposit-total", inputAmount);
  updateBalance(inputAmount, true);
});
//handle withdraw event
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const inputAmount = getInputValue("withdraw-input");
  if (isNaN(inputAmount) || inputAmount <= 0) {
    alert("Please enter a valid amount");
    return;
  }
  UpdateTotal("withdraw-total", inputAmount);
  updateBalance(inputAmount, false);
});
