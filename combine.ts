type Combine = number | string

function combine (num1:Combine, num2:Combine, resultConversion: string) {
    let result;
   if (typeof num1 == 'number' && typeof num2 == 'number' || resultConversion == 'as-number') {
       result = +num1 + +num2
   } else {
       result = num1.toString() + num2.toString()
   }
}



console.log(combine(1,2,"as-number"))
console.log(combine('max','anna','as-text'))