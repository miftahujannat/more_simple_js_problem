const products = [
    {name:'laptop', price: 43000},
    {name:'shirt', price:500},
    {name:'watch', price:3680},
    {name:'phone', price:55000}
]
let totalprice = 0;

for(const product of products){
    totalprice = totalprice + product.price * product.quantity;
}
console.log(totalprice);

const cart = [
    {name:'laptop', price: 43000 , quantity: 1},
    {name:'shirt', price:500 , quantity: 8},
    {name:'watch', price:3680 , quantity:3},
    {name:'phone', price:55000 , quantity:1}
]
let carttotal = 0;
for(const product of cart){
    console.log(product);
    const producttotal = product.price * product.quantity;
    carttotal = carttotal + producttotal;
}
console.log(carttotal);