const sum = (a,b) =>{
    return a + b;
}
const min = (a,b) =>{
    return a - b;
}

const sort = () =>{
    let arr = [2,37,22,33,87];

    for(let i = 1; i<=arr.length; i++){
        for(j=1; j <= arr.length; j++){
            let tmp;
            if(arr[i] > arr[j]){
                tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp

            }
        }
    }
    return arr
}

module.exports = {
    sum,min,arr
}