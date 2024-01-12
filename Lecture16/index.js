// let num=5;
// console.log(num);

// // const a=12;
// // a = 13;

// let fName ='Vaibhav';
// console.log(fName);

// fName = 4;
// console.log(fName);

// let a = 5;
// let b = 10;

// let ans1 = (++a) * (--b);
// let ans2 = (a++) * (--b);
// let ans3 = (a++) * (b--);
// let ans4 = (++a) * (b--);

// console.log(ans1, ans2, ans3, ans4);

//object in js

let rectangle = {
    length: 1,
    breadth: 2,

    draw: function(){
        console.log('drawing rectangle');
    }
}; 

//factory function
function createRectangle() {
    let rectangle = {
        length: 5,
        breadth: 2,
    
        draw: function(){
            console.log('drawing rectangle');
        }
    }; 
    return rectangle;
}

let rectangleObj1 = createRectangle();