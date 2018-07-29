function checkCashRegister(price, cash, cid) {
  
  const moneyVals = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01]
  let cashDrawer = cid.reverse(); // money in register
  let custChange = [["ONE HUNDRED", 0], ["TWENTY", 0], ["TEN", 0], ["FIVE", 0], ["ONE", 0], ["QUARTER", 0], ["DIME", 0], ["NICKEL", 0], ["PENNY", 0]]; // change for customer
  let drawer = {status: "", change: []}; // value to return
  let remainder = cash - price;
  for (let i = 0; i < moneyVals.length; i++) {
    // loop through change denominations
    while (remainder >= moneyVals[i] && cashDrawer[i][1] > 0) {
      // subtract change amount until the denomination is bigger than remaining change
      while (cashDrawer[i][1] > 0 && remainder >= moneyVals[i]) {
        remainder -= moneyVals[i];
        custChange[i][1] += moneyVals[i];
        cashDrawer[i][1] -= moneyVals[i];
        // update remainder, remove change from drawer and add to change for customer
        remainder = Math.round(remainder * 100) / 100;
        custChange[i][1] = Math.round(custChange[i][1] * 100) / 100;
        // Rounding these prevents a precision error, unsure what caused the error but it had me stumped for a while.
      }
    }
  }
  if (remainder > 0) { // checks if loop finished with change still to give
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }else if (cashDrawer.some(x=>x[1] > 0)) { // checks for remaining money in register
    drawer.status = "OPEN";
  }else { // if no money left close the register
    drawer.status = "CLOSED";
    custChange.reverse().forEach(function(x) {
      drawer.change.push(x);
    })// added this part as the tests require return denominations with 0 value in the change instead of just the change given for some reason
    return drawer; 
  }
  custChange.forEach(function(x) {
    if (x[1] > 0) {
      drawer.change.push(x);
    }
    // only add change value to drawer if the customer is receiving money of that denomination
  })
  return drawer;
}
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])