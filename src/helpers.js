module.exports = {
    multiplyByDigit,
};

function multiplyByDigit(number, digit) {
    let surplus = 0;
    const resultWithoutLastSurplus = String(number)
        .split('')
        .reduceRight((acc, currDigit) => {
            const currentProduct = digit * currDigit + Number(surplus);
            const remainder = currentProduct % 10;
            surplus = (currentProduct - remainder) / 10;
            return `${nonZeroToString(remainder)}${acc}`;
        }, '');
    const resultWithLastSurplus = `${nonZeroToString(surplus)}${resultWithoutLastSurplus}`;
    return resultWithLastSurplus === ''
        ? '0'
        : resultWithLastSurplus;
}

function nonZeroToString(number) {
    return `${Number(number) !== 0 ? number : ''}`;
}
