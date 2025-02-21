// call ->function invokes directly
// bind ->we can store the reference 





// let studentSahil={
//     firstName:"Sahil",
//     lastName:"aggarwal",

    // getName:function(){
    //     console.log(this.firstName)
    // },

    // getResult:function(){
    //     console.log("passed")
    // }
// }




// let studentJasjot={
//       firstName:"jasjot",
//       lastName:"Singh",

    //   getName:function(){
    //     console.log(this.firstName)
    // },

    //   getResult:function(){
    //     console.log("passed")
    //   }
// }




// const getName=function (classStudent,test){
//     console.log(this.firstName+this.lastName+" from class "+ classStudent+ test);
    
// }



// call
// getName.call(studentSahil,"g16","g16")
// getName.apply(studentJasjot,["h2","h9"])

//bind

// const getStudentBind=getName.bind(studentSahil,"g16");
// getStudentBind()

// var print= studentSahil.firstName;
// console.log(print);




// ------------------------------------------------------------------------------------------


// what is event bubbling and event capturing



// false->bubbling
// true->capturing

// Event Bubbling->effect from child to parent

// event capturing->from grandparent to child

// document.getElementById("grandParent").addEventListener("click",()=>{
//     console.log("this is grandparent div")
// })


// document.getElementById("parent").addEventListener("click",()=>{
//     console.log("this is parent div")
// })



// document.getElementById("child").addEventListener("click",()=>{
//     console.log("this is child div")
// })


// document.getElementById("cs").addEventListener("click",()=>{
//     window.location.href="localhost/cs";
//   })
//   document.getElementById("ece").addEventListener("click",()=>{
//     window.location.href="localhost/ece";
//   })
//   document.getElementById("me").addEventListener("click",()=>{
//     window.location.href="localhost/me";
//   })



// document.getElementById("subjects").addEventListener("click",(e)=>{
//     window.location.href=e.target.dispatchEvent;
//     console.log("https://localhost/"+e.target.id)
// })


// instead of using multiple event listener to every elemrnt jus add event listner on parent->event delegation

// Debouncing  

// document.getElementById("searchBox").addEventListener("input",debouncingFunction);
// let whichCall=0;

// let timeout;

// function fetchData(){
//     console.log("fetching api data",whichCall++)
// }

// function debouncingFunction(){
//     clearTimeout(timeout);
//     timeout=setTimeout(fetchData,2000)
// }



// Task

//https://api.chucknorris.io/jokes/categories            fetch: async await


//filter 



//debouncing


document.getElementById('searchBox').addEventListener("input",fetchApi);

function fetchApi(){
    console.log("ehello")
}



