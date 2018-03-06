
console.log('This page is designed to calculate a tip for you.');
function calculate(billPreTip, tipPercentage, totalBill)
{
  billPreTip = document.getElementById("billPreTip").value;
  tipPercentage = document.getElementById("tipPercentage").value;
  document.getElementById("result").innerHTML = (billPreTip * tipPercentage) + billPreTip;
}

var billPreTip = 40;
var tipPercentage = .20;
var totalBill = (billPreTip * tipPercentage) + billPreTip;
console.log(billPreTip);
console.log(tipPercentage);
console.log(totalBill);
