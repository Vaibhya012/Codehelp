// let myPromise = new Promise(function(resolve, reject){

//     setTimeout(function(){
//     console.log("I am inside Promise");
//     }, 5000);

// })

let wadaa1 = new promise((resolve, reject) => {
    setTimeout(()=> {
        console.log("setTimeout1 started");
    }, 2000);
    resolve(true);
})

let output = wadaa1.then(() => {
    let wadaa2 = new promise(function(resolve, reject){
        setTimeout(() => {
            console.log("setTimeout2 started");
        }, 3000);
        resolve("wadaa 2 resolved");
    })
    return wadaa2;
})

output.then((value) => console.log(value));