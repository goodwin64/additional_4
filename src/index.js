module.exports = function multiply(first, second) {
    var productSums = [];
    for (var i = second.length - 1, j = 0; i >= 0; i--, j++) {
        var localProduct = multiplyByDigit(first, second[i]) + '0'.repeat(j);
        productSums.push(localProduct);
    }
    return addByDigits(productSums);
};

function multiplyByDigit(number, digit) {
    var surplus = 0;
    var resultWithoutLastSurplus = String(number).split('').reduceRight(function (acc, currDigit) {
        var currentProduct = digit * currDigit + Number(surplus);
        var remainder = currentProduct % 10;
        surplus = (currentProduct - remainder) / 10;
        return '' + remainder + acc;
    }, '');
    var resultWithLastSurplus = '' + nonZeroToString(surplus) + resultWithoutLastSurplus;
    return resultWithLastSurplus === '' ? '0' : resultWithLastSurplus;
}

function nonZeroToString(number) {
    return '' + (Number(number) !== 0 ? number : '');
}

function addByDigits(numbers) {
    var maxLength = Math.max.apply(null, numbers.map(function (str) {
        return str.length;
    }));
    var notations = numbers.map(function (number) {
        var zerosPrefix = '0'.repeat(maxLength - number.length);
        return zerosPrefix + number;
    });
    var result = '';
    var surplus = 0;

    var _loop = function _loop(i) {
        var currDigitSum = notations.reduce(function (acc, curr) {
            return acc + Number(curr[i]);
        }, 0) + surplus;
        var remainder = currDigitSum % 10;
        surplus = (currDigitSum - remainder) / 10;
        result = remainder + result;
    };

    for (var i = maxLength - 1; i >= 0; i--) {
        _loop(i);
    }
    return nonZeroToString(surplus) + result;
}
