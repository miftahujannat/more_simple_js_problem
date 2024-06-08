const phones =[
    {name:'samsung s5', price:45000, camera:10, storage:32},
    {name:'walton mp3', price:15000, camera:8, storage:8},
    {name:'showmi', price:5000, camera:10, storage:32},
    {name:'oppo a2', price:45000, camera:10, storage:32},
    {name:'nokia n95', price:3000, camera:8, storage:16},
    {name:'htc', price:25000, camera:10, storage:32}
]

let cheapest = phones[0];
for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);