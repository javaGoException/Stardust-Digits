let calc_button = document.getElementById("calculate_button");
let result = document.getElementById("result_field");
let input = document.getElementById("input_field");
let from = document.getElementById("convert_from");
let to = document.getElementById("convert_to");

calc_button.addEventListener("click", calculate_result);

//Main function for choosing the right number format.
function calculate_result() {

    //The idea for the custom error was taken from:
    //https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity

    let number = 0;

    if (!input.value) {
        input.setCustomValidity("Input field can't be empty.");
        input.reportValidity();
        return;
    }

    //Getting the number in Decimal.

    if (from.value == "Decimal") {


        //Check if the value for Decimal is valid

        if (checkInput("Decimal") == false) {
            input.setCustomValidity("The Decimal number is not valid.");
            input.reportValidity();
            return;
        }

        number = to_Decimal_from(input.value, 10);
    }

    if (from.value == "Binary") {

        //Check if the value for Binary is valid

        if (checkInput("Binary") == false) {
            input.setCustomValidity("The Binary number is not valid.");
            input.reportValidity();
            return;
        }

        number = to_Decimal_from(input.value, 2);
    }

    if (from.value == "Hex") {

        //Check if the value for Hex is valid
        if (checkInput("Hex") == false) {
            input.setCustomValidity("The Hexadecimal number is not valid.");
            input.reportValidity();
            return;
        }

        number = to_Decimal_from(input.value, 16);
    }

    if (from.value == "Octal") {

        //Check if the value for Octal is valid
        if (checkInput("Octal") == false) {
            input.setCustomValidity("The Octal number is not valid.");
            input.reportValidity();
            return;
        }

        number = to_Decimal_from(input.value, 8);
    }

    //Converting from Decimal to other Formats.

    if (to.value == "Decimal") {
        result.value = from_Decimal_to(number, 10);
    }

    if (to.value == "Binary") {
        result.value = from_Decimal_to(number, 2);
    }

    if (to.value == "Hex") {
        result.value = from_Decimal_to(number, 16);
    }

    if (to.value == "Octal") {
        result.value = from_Decimal_to(number, 8);
    }
}

// Idea for Converting of Numbers:
//https://codingbeautydev.com/blog/javascript-convert-decimal-to-hex/
//https://codingbeautydev.com/blog/javascript-convert-hex-to-decimal/

function to_Decimal_from(number, format) {
    return parseInt(number, format);
}

function from_Decimal_to(number, format) {
    return Number(number).toString(format).toUpperCase();
}

//Checking if different inputs are valid. 

function checkInput(format) {

    validInput = "0123456789";

    if (format == "Binary") {
        validInput = "01";
    }

    if (format == "Hex") {
        validInput = "0123456789ABCDEFabcdef";
    }

    if (format == "Octal") {
        validInput = "01234567";
    }

    for (let i = 0; i < input.value.length; i++) {
        let num = input.value[i];
        if (!validInput.includes(num)) {
            return false;
        }
    }
    return true;
}