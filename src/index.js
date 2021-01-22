module.exports = function toReadable(number) {
    const num = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 20) {
        return num[number];
    } else if (number < 100) {
        let digit = number % 10;

        return (
            tens[Math.trunc(number / 10) - 2] + (digit ? " " + num[digit] : "")
        );
    } else {
        return (
            num[Math.trunc(number / 100)] +
            " hundred" +
            (number % 100 == 0 ? "" : " " + toReadable(number % 100))
        );
    }
};
