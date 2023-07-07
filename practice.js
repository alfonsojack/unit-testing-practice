function findRemainder(num1, num2) {
  return num1 % num2
}
function startGPS(currentPoint, newPoint) {
  if (currentPoint === newPoint) {
    return `You are already at the ${currentPoint}!  Would you like to go somewhere else?`
  }
 else {return `Taking you from ${currentPoint} to ${newPoint}!  Getting directions now!`
}
};

function createUser(name1, name2, birthDay){
  return {
    firstName: name1,
    lastName: name2,
    birthDate: birthDay,
    onlineStatus: false
  }
};

function makePizza(pizza, topping){
if (pizza.toppings.length <= 4){
    pizza.toppings.push(topping)
    pizza.cooked = true
}
}



module.exports = {
  findRemainder,
  startGPS,
  createUser,
  makePizza
}