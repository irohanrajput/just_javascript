// creating an object "orderDetails"

const orderNumber2 = {
    noOfPizzas: 3,
    extraCheese: true,
    deliveryInstructions: "CV raman hostel, kiet college",
};

// creating a function to return the no. of pizzas
// order  = order number
function numberOfPizzas(order) {
    return order.noOfPizzas;
    
}

console.log(numberOfPizzas(orderNumber2))


module.exports = numberOfPizzas;