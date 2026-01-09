
function fun2(first_element,arr1){

    let arr2 = [1,2,8]

    let array2 = [...[first_element],...arr2,...arr1]

    // array2.forEach((ele,i) => {
    //     console.log(ele);
    // })
    for(const ele of array2){
        console.log(ele)
    }
    
    const total_sum = array2.reduce((acc,curr_val) => acc + curr_val,0)

    return new Promise((resolve,reject) => {
        if(total_sum > 35){
            resolve("Promise resolved")
        }
        else{
            reject("Promise rejected")
        }
    })
}

function fun1(){

    let arr1 = [4,5,9,3]
    let first_element = arr1.shift()

    // console.log(first_element)
    fun2(first_element,arr1)
    .then(message => {
        console.log(message)
    })
    .catch(error => {
        console.log(error)
    })
}

fun1()