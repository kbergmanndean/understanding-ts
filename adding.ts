const add = (...numbers: number[]) => {
    return numbers.reduce((currResult, currValue)=>{
        return currResult + currValue
    },0);
};

const addedNumbers = add(1,2,3,4);
console.log(addedNumbers);
