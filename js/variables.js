// We can declare the same name variable.
// var x = 10;
// var x = 20;

// console.log(x);      //20

// var x;
// console.log(x);         //undefined


// var x = 10;
// var x;
// console.log(x);         //10

// var does not have any block scope.
// var x = 5;

// {
//     var x = 10;
// }

// console.log(x);     //10

// We can not redeclare the same name variable.
// let x = 10;
// let x = 20;
// console.log(x);     //error

// let have a block scope.

// let x = 10;     //global scope
// let y = 2;

// {
//     let x = 20;     //local scope
//     console.log(x); //20
//     console.log(y); //2
// }

// console.log(x);  //10

// We can not redeclare the same name variable.
// const x = 10;
// const x = 20;
// console.log(x); //error

// We can not change the value of const variable.
// const x = 10;
// x = x+5
// console.log(x);

// Declaration and initialization must be done at same time.
// const x;
// x = 10;
// console.log(x); //error



// const have a block scope.

// const x = 10;

// {
//     const x = 20;
// }

// console.log(x); //10

// var x = 10
// let x = 20
// const x = 30;

// console.log(x);     //error

// var x = 10;

// {
//     let x = 20;
// }

// console.log(x); //10

