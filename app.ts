function add (num1:number, num2:number, phrase:string, print:boolean) {
    const result = num1 + num2
    if (print) {
        console.log(phrase + result)
    } else {
        return result
    }
}