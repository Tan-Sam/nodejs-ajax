// todo: alternate font-color-rows
// input change delay
// new row funct()
// sum-total $$

function calculateTotal(e) {
      if (e.key !== 'Tab') {
        // check if delay is long enough ttd

        // if delay is long enough, check if value is number
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

function resetChanges(e) {

  var eParent = e.target.parentElement;

  var totalPrice = eParent.nextElementSibling.firstElementChild;
  var targetInput = eParent.previousElementSibling.firstElementChild;

  targetInput.value = "";

  totalPrice.innerText = totalPriceDefaultMsg;
}

$('document').ready(()=>{
    $('button').on('click', resetChanges);
    $('input').on('keyup',calculateTotal);
    $('.qtyPriceTotal').on('DOMSubtreeModified', ()=> console.log('changed'))
    // $('input').on('change',inputValueChanged);
});
