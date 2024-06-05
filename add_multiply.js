/*
chairwood = 3gft/chair
tablewood = 10cft/table
bedwood = 50cft/bed
*/
function  woodcalculator(chairquantity,tablequantity,bedquqntity){
    const perchairwood = 3;
    const pertablewood = 10;
    const perbedwood = 50;
    const chairwoodquantity = chairquantity * perchairwood;
    const tablewoodquantity = tablequantity * pertablewood;
    const  bedwoodquantity = bedquqntity * perbedwood;

    const totalwood = chairwoodquantity + tablewoodquantity + bedwoodquantity;
    return totalwood;
}

const firstoptin = woodcalculator(1,1,1);
console.log(firstoptin);