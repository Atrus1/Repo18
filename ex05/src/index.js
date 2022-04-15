// Only change code below this line
let shoppingList = new Map([
    ['Banana', 3],
    ['Pineapple' ,5],
    ['Pear', 2],
    ['Carrot', 10],
    ['Apple', 1.5]
]);
const arrKey = []
for (let col of shoppingList.entries()){
    console.log(`groceries: ${col[1]}`);
    arrKey.push(col[0])
}
const arrValue = []
for (let col of shoppingList.entries()){
    console.log(`amount: ${col[0]}`);
    arrValue.push(col[1])
}

for(let [key, value] of shoppingList){
    console.log([value, key])
}
// Only change code above this line

module.exports = { shoppingList, arrKey, arrValue };