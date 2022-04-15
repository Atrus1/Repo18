let myArr = [];
// Only change code below this line
function* multiplication(x) {
    for (let i = 0; i < x; i++){
    x *=2;
    yield x;
    myArr.push(x);
    }
    return myArr;
}
     var num = multiplication(3);

     num.next().value;
     num.next().value;
     num.next().value;
     num.next().value;

     for(n of myArr) {
         console.log(n)
}

// Only change code above this line
module.exports = multiplication;