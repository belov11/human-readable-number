module.exports = function toReadable (number) {
    if (number == 0) {
        return 'zero';
    }
    const result = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
    }

    let numberText = '';

    for (let key in result) {
        
        let hundred = Math.floor(number / 100) > 0 ? result[Math.floor(number / 100)] + ' hundred ' : '';
        let dozens = (number % 100 / 10) * 10 > 20 ? result[Math.floor(number % 100 / 10) * 10] + ' ' : '';
        let units = Math.floor(number % 100) <= 20 ? result[number % 100] : result[number % 10];
        
        numberText = (hundred + dozens + units);
    }
    return numberText = numberText.slice(numberText.length - 1) == ' ' ? numberText.slice(0, numberText.length - 1) : numberText;
}
