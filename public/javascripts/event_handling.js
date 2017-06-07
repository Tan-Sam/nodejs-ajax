// todo: alternate font-color-rows
// input change delay
// new row funct()
// sum-total $$

//  muliply qty & itmPrice$
function calculateSubTotal(e) {

      if (e.key === 'Escape') {
        // clear input data
          $(e.target).val('');
        // clear subtotal
          $(e.target).parents('.dataRow').
                      first().
                      find('.qtyPriceTotal').text('Total $$');
      }
      else if (e.key !== 'Tab') {
        // check if value is number
        var tInput = e.target;
        var result;

        if (tInput.value.match(/(\D|^$)/g)) {
        // invalid input
          result = "Invalid qty-input.";
        }
        else {    // valid input
        // get item qty.
            var qty = parseInt(tInput.value);
        // get item price elem
            var itmPrice = tInput.parentElement.
                                  previousElementSibling.
                                  previousElementSibling.
                                  firstElementChild.innerText;
            // parse value
            itmPrice = parseFloat(itmPrice.match(/\d+(\.\d{1,2})?/g));
            result = formatter.format(itmPrice * qty);
        }
        // get target & set output
        var targetOutput = tInput.parentElement.
                                  nextElementSibling.
                                  nextElementSibling.
                                  firstElementChild;
        targetOutput.innerText = result;
      }
}

//  sum total of all itmsPrices$
function calculateTotal() {
  var toPrice = 0;
  $('.qtyPriceTotal').each((i, e)=>{ toPrice += parseCurrency(e.innerText);});
  $('.totalPrice').first().text(formatter.format(toPrice.toFixed(2)));
}

//  handle cancel button click
function resetChanges(e) {
  // get target elements
  var eParent = e.target.parentElement;
  var totalPrice = eParent.nextElementSibling.firstElementChild;
  var targetInput = eParent.previousElementSibling.firstElementChild;
  // clear values
  targetInput.value = "";
  // set default msg
  totalPrice.innerText = totalPriceDefaultMsg;
}

$('document').ready(()=>{
    $('button').on('click', resetChanges);
    $('input').on('keyup',calculateSubTotal);
    $('.qtyPriceTotal').on('DOMSubtreeModified', calculateTotal);
    // $('input').on('change',inputValueChanged); --not working?
});
