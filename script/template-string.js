function print(firstName) {
  console.log(`Hello ${firstName}`);
}

function createEmail(firstName, purchasePrice) {
  var shipping = 5.95;
  console.log(
    `Hi ${firstName}, Thanks for buying from us!
        Total: $${purchasePrice}
        Shipping: $${shipping}
        Grand Total: $${purchasePrice + shipping};
    `);
}

print('Isabelle');
createEmail('Gina', 100);
