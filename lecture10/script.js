// promise.all   (if all are resolved then show all but if one of them is failed then only failed will displayed)
// promise.allSettled    (je sahi ta ta sahi show kru je error ta eroor display krdu pr saare kru)
// prmise.race       ()
// promise.any


// Promise api

// const myPromiseFromNetflix=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Fetched Data from Netflix");
//     },1000)
// });

// const myPromiseFromTwitter=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Fetched Data from Twitter");
//     },2000)
// });


// const myPromiseFromGitHub=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Fetched Data from Github");
//     },3000)
// });


// const myPromiseFromHotstar=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Fetched Data from HotStar");
//     },4000)
// });



// const dataFromAll=Promise.all([myPromiseFromNetflix,myPromiseFromTwitter,myPromiseFromGitHub,myPromiseFromHotstar])


// console.log(dataFromAll)


// const dataRace=Promise.race([myPromiseFromNetflix,myPromiseFromTwitter,myPromiseFromGitHub,myPromiseFromHotstar]);
// console.log(dataRace);




// ------------------------------------------------------------------------------------------------------------------------------------------


// Async -Await
// (async is also a promise)

// async->it is a feature to make any function async


// async function techDirectFunction(){
//     console.log("this is helloTech Mahindra");
// }

// const techData=techDirectFunction();
// console.log(techData);
// techData.then((res)=>{
//     return res;
// })



// const samarPromised= new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("i will be on timeu470olp")
//     })
// })
// console.log("hello class")

// function techMahindra(){
//     console.log("samar")
// }

// techMahindra();



// -------------------------------\


// const projectSubmissionByKuber= new Promise(
//     function(res,rej){
//         setTimeout(()=>{
//             res("Submitted Project Successfully");
//         },5000);
//     }
// )


// async function projectEvaluation(){
//     const projectFile= await projectSubmissionByKuber;
//     console.log(projectFile);
// }

// projectEvaluation();




// -----------------------------------------------

// console.log("Class start");
// const projectByKuber=new Promise(function(res,rej){  // make the function to return promise
//   setTimeout(()=>{
//     res("Submitted Project Successfully");
//   },5000);
// })
// console.log("lunch");

// async function projectEvaluation(){
//   console.log("Attendance Viva");
//   const projectFile=await projectByKuber;   // wait for a promise to return  
//   console.log(projectFile);
//   console.log("project File Check");
// }

// projectEvaluation()
// console.log("Class End");

// ----------------------------------------------------



// console.log("Class start");
// const FileByKuber=new Promise(function(res,rej){  // make the function to return promise
//   setTimeout(()=>{
//     res("Kuber writing");
//   },5000);
// })
// console.log("lunch");

// async function Evaluation(){
//   console.log("Attendance Marking");
//   const projectFile=await FileByKuber;   // wait for a promise to return  
//   console.log(projectFile);
//   console.log("Class End");
// }

// Evaluation();



// fetching API

// async function fetchApiData(){
//     try{
//     const dat=await fetch("https://api.chucknorris.io/jokes/categories");
//     const myData=await data.json();
//     return myData;
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// const finalData=fetchApiData();
// finalData.then((res)=>{
//     console.log(res )
// })


