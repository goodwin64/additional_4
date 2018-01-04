module.exports = {
    multiplyByDigit,
    addByDigits,
};

function multiplyByDigit(number, digit) {
    let surplus = 0;
    const resultWithoutLastSurplus = String(number)
        .split('')
        .reduceRight((acc, currDigit) => {
            const currentProduct = digit * currDigit + Number(surplus);
            const remainder = currentProduct % 10;
            surplus = (currentProduct - remainder) / 10;
            return `${remainder}${acc}`;
        }, '');
    const resultWithLastSurplus = `${nonZeroToString(surplus)}${resultWithoutLastSurplus}`;
    return resultWithLastSurplus === ''
        ? '0'
        : resultWithLastSurplus;
}

function nonZeroToString(number) {
    return `${Number(number) !== 0 ? number : ''}`;
}

function addByDigits(numbers) {
    const maxLength = Math.max.apply(null, numbers.map(str => str.length));
    const notations = numbers.map(number => {
        const zerosPrefix = '0'.repeat(maxLength - number.length);
        return zerosPrefix + number;
    });
    let result = '';
    let surplus = 0;
    for (let i = maxLength - 1; i >= 0; i--) {
        const currDigitSum = notations
            .reduce((acc, curr) => {
                return acc + Number(curr[i]);
            }, 0) + surplus;
        const remainder = currDigitSum % 10;
        surplus = (currDigitSum - remainder) / 10;
        result = remainder + result;
    }
    return nonZeroToString(surplus) + result;
}
