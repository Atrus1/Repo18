// Only change code below this line
let iterator = myGenerator(6, 7 ,8);
const generatorArray = [];

function* myGenerator(a, b ,c) {
    yield* [1, 2, 3, 4, 5];
    yield* 'Arena';
    yield* arguments;
}                
            for (value of iterator ) {
                generatorArray.push(value);
            }
            console.log(generatorArray);
        
// Only change code above this line
module.exports = { generatorArray, myGenerator };