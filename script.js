// script.js

function convertToRoman(num) {
    if (num <= 0 || num > 100000) {
        return "Invalid input. Please enter a number between 1 and 100000.";
    }

  
    const romanNumerals = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" },
    ];

  
    let roman = "";

    
    for (let i = 0; i < romanNumerals.length; i++) {
        const currentSymbol = romanNumerals[i];

     
        while (num >= currentSymbol.value) {
            roman += currentSymbol.numeral;
            num -= currentSymbol.value;
        }
    }

    return roman;
}

