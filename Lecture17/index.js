//Primitiu are copied by their value

// let a = 5;
// let b = a;
// a++;

// console.log(a);
// console.log(b);

//Refernces are copied by their address/Refernce
// let a ={value: 5};
// let b = a;
// a.value++;

// console.log(a.value);
// console.log(b.value);


// OBJECT CLONING

//Iteration 1
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

//Assign 2
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = Object.assign({}, src);

// console.log(dest);

//Spread 3
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {...src};

// console.log(dest);


// let first = [1,2,3];
// let second = [4,5,6,];

// let combined = first.concat(second);

// console.log(combined);

// let sliced = combined.slice(2,4);

// console.log(sliced); 

// let arr = [10,20,30,40,50,60];

// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(function(number){
//     console.log(number);
// })

// arr.forEach(number=> console.log(number));

// let num = [10,20,30,40];

// const joined = num.join(',');
// console.log(joined);

// let massage = 'This is my first massage';
// let parts = massage.split(' ');

// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);

// let num = [40,30,50,10,20];

// num.sort();
// console.log(num);

// num.reverse();
// console.log(num);

// let num = [1,2,-1,-5];

// let filtered = num.filter(value => value >=0);

// console.log(filtered);


// let num = [7,8,9,10];
// let items = num.map(value => 'Student_no' + value);

// console.log(items); 

//function 

// //function call
// run();

// //function declaration
// function run() {
//     console.log('Running');
// }

// //function assignment
// let stand = function walk() {
//     console.log('walking');
// }

// stand();

// function sum(){
//     let total = 0;
//     for(let value of arguments)
//         total = total + value;
//     return total;
// }

// let ans = sum(1,2,3,3,4);
// console.log(ans);

// function sum(num, ...args){
//     console.log(args);
// }

// sum(1,2,3,4,5,6,7);

function interest(p,r=6,y=8){
    return p*r*y/100;
}

console.log(interest(1000,5));