










function getData(dataId){
    return new Promise((resolve, reject) => {
        let data = dataId;
        getData2(dataId)
        resolve(`the data is ${dataId}`)
    })
}


function getData2(getData){
    return new Promise((resolve, reject) => {
        getData(2)
        resolve(`the data id ${dataId}`)
    })
}


console.log(getData2())