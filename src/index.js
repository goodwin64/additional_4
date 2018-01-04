const {
  multiplyByDigit,
  addByDigits,
} = require('./helpers.js');

module.exports = function multiply(first, second) {
    var productSums = [];
    for (var i = second.length - 1, j = 0; i >= 0; i--, j++) {
        var localProduct = multiplyByDigit(first, second[i]) + '0'.repeat(j);
        productSums.push(localProduct);
    }
    return addByDigits(productSums);
};
