module.exports = function toReadable(number) {
    const ones = [
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
    ];
    const teens = [
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
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    function convertUnder100(num) {
        if (num === 0) {
            return "";
        } else if (num < 10) {
            return ones[num];
        } else if (num < 20) {
            return teens[num - 11];
        } else {
            const ten = Math.floor(num / 10);
            const one = num % 10;
            return tens[ten - 1] + (one > 0 ? " " + ones[one] : "");
        }
    }

    if (number === 0) {
        return "zero";
    } else if (number < 10) {
        return ones[number];
    } else if (number < 100) {
        return convertUnder100(number);
    } else {
        const hundred = Math.floor(number / 100);
        const remainder = number % 100;
        const result = ones[hundred] + " hundred";
        if (remainder > 0) {
            return (
                result +
                (remainder < 10 ? " and " : " ") +
                convertUnder100(remainder)
            );
        } else {
            return result;
        }
    }
};
