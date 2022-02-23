function combining(num1, num2, resultConversion) {
    var result;
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    if (resultConversion == "as-number") {
        return +result;
    }
    else {
        return result.toString();
    }
}
console.log(combining(1, 2, "as-number"));
console.log(combining('max', 'anna', 'as-text'));
