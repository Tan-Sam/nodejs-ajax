// todo: alternate font-color-rows
// input change delay-- seems like no need.
// new row funct()
// sum-total $$

// extend object console log
// Object.prototype.log = ()=> console.log(this); --causes jQuery error

const totalPriceDefaultMsg = "Total $$";

function parseCurrency(strInput) {
  var result = 0;
  // replace $dollar and ,commas.
  strInput = strInput.replace(/[\$\,]/g, '');

  // match currency pattern strictly
  var currencyPattern = /^\d+(\.\d{1,2})?$/g;
  var inputMatches = strInput.match(currencyPattern);
    if (inputMatches) {
      result = parseFloat(inputMatches);
    }
  return result;
}

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

function inputValueChanged(e) {
  var tInput = e.target;
  if (tInput.value === "") {
    tInput.parentElement.
    nextElementSibling.
    nextElementSibling.
    firstElementChild.innerText = "totalPriceDefaultMSs";
  }
}
