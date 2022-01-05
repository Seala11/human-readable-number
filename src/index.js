module.exports = function toReadable(number) {
    const ones = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
    };
    const teens = {
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    const dozens = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    if (number >= 0 && number <= 10) return ones[number];
    if (number >= 11 && number < 20) return teens[number];
    if (number >= 20 && number <= 99) {
        let first = Math.trunc(number / 10) * 10;
        let second = number % 10;
        if (second === 0) {
            return dozens[first];
        } else {
            return `${dozens[first]} ${ones[second]}`;
        }
    }
    if (number >= 100 && number < 1000) {
        let hundreds = Math.trunc(number / 100);
        let dozens = number % 100;
        if (dozens === 0) {
            const result = toReadable(hundreds) + " hundred";
            return result;
        } else {
            const result =
                toReadable(hundreds) + " hundred " + toReadable(dozens);
            return result;
        }
    }
};