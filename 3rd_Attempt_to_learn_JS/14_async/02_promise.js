// promise.then((response) => {
//     ...
// })

// promise.catch((error) => {
//     ...
// })



// let promise = new Promise((resolve, reject) => {
//     console.log("i am a promise")
//     resolve("hola amigo")
// } )


// function getData(dataId, getNextData ){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data is", dataId);
//             if (getNextData){
//                 getNextData()
//             }
//         }, 2000);
//     })
// }


const getPromise = () => {
    return new Promise((resolve, reject) =>{
        console.log("i am a promise")
        resolve("success")
    })
}

let promise = getPromise()

let ifAccepted = promise.then((response) => {
    console.log("resolved", response)
    return true;
}).catch((error) => {
    console.log("rejected", error)
    return false;
}); 

if(ifAccepted == true){
    console.log("we got in")
}
else{
    console.log("get outta here")
}