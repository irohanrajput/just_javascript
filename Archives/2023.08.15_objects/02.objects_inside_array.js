// This is an example of objects inside an array

const shoppingCart1 = [
    {
    product: 'First Product',
    price: 6.88,
    quantity: 1,
    },
    {
    product: 'Second Product',
    price: 29.99,
    quantity: 3
    },
    {
    product: 'Third Prouduct',
    price: 39.99,
    quantity: 2
    }
]

// accessing data from objects and arrays..
console.log(shoppingCart[1].product);

// function to print all the items inside the shopping cart

function printShoppingCart(cart_name){
    for (let i = 0; i < cart_name.length; i++){
        console.log("Product Name = "+ cart_name[i].product);
        console.log("Price = "+ cart_name[i].price);
        console.log("Quantity = "+ cart_name[i].quantity);
    }
}

printShoppingCart(shoppingCart1)



