// closure is bundled with its own and lexical parent scope



// setTimeout vs setInterval(asynchronous and callback function)

// setTimeout->for a particular time period it will stay and when the time is complete  it will join the execution thread


//setInterval-> >for a particular time period it will stay in the queue and then join the thread and this happen again and again



// setInterval

// function two(){
//     return 2;
// }
// function four(){
//     return 4;
// }

// console.log(1);
// console.log(two());
// setInterval(()=>{
//     console.log(3);
// },3000)
// console.log(four());
// setInterval(()=>{
//     console.log(3)
// },5000)
// console.log(6)

// for(var i=1;i<=6;i++){
//     setTimeout(()=>{
//         console.log(i);
//     })
// }
// for(let i=1;i<=6;i++){
//     setTimeout(()=>{
//         console.log(i);
//     })
// }

// for(var i=1;i<=6;i++){
//     function two(){
//     setTimeout(()=>{
//         console.log(i);
//     })
// }
// }
// two();


// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
// return y;
// }

// var z=x();
// console.log(z);
// z();


// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     a=100;
// return y;
// }

// var z=x();
// console.log(z);
// z();




// function z(){
//     var b=900;
//     function x(){
//         var a=7;
//       function y(){
//         console.log(a,b);
//       }
//     y();
// }
// x();
// }
// z();




// var count=0;

// function increment(){
//      return count++;
// }

// increment();
// increment();
// increment
// console.log(count)    


// var count=0;

// for(var i=1;i<=3;i++){
//     function print(){
//         count++;
//     }
//     print();
// }
// console.log(count);


// Higher order function ->it can take function as an argument as well return function.



function counter(){
    var count=0;
    return function increment(){
         count++;
         console.log(count);
    }
}


var counter1=counter();
counter1();
counter1();