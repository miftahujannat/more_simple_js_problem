function add(num1,num2){
    const sum = num1 + num2;
    return sum;
}

const addfirstnumber = add(50 , 25);
// console.log(addfirstnumber);
const addsecondnumber = add(550 , 50);
// console.log(addsecondnumber);

function multiply(num1,num2){
    console.log('parameter',num1,num2);
    const result = num1 * num2;
    return result;
}
const  multinumber = multiply(5 , 5);
console.log(multinumber);