// function largestelement (number){
//     let max = number[0];//
//     for(let i = 0; i < number.length; i++){
//         const element = number[i];
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// const largestnumber = largestelement([27, 66, 90]);
// console.log(largestnumber);

// min number ber kortey 


function smallelement(number){
    let min = number[0];
    for(let i = 0; i < number.length; i++){
        const element = number[i];
        if(element < min){
            min = element;
        }
    }
    return min;
}
const smallnumber = smallelement([22,98,34]);
console.log(smallnumber);