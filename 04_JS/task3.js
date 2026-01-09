// const fun1 = (num1) => console.log(num1)
// const fun2 = (num1,num2) => console.log(num1,num2)

// let a = fun1
// console.log(a,typeof(a))
// a(4)

// a = fun2
// console.log(a,typeof(a))
// a(18,19)

// let b = fun2
// console.log(b,typeof(b))
// b(8,9)

// b = fun1
// console.log(b,typeof(b))
// b(6)

function fun2(first_element,arr1){

    let arr2 = [Symbol(7),Symbol(5),Symbol(1),Symbol(2)]

    let array1 = [...first_element,...arr2,...arr1]

    for(const ele of array1){
        console.log(Number(ele.description))
    }

    let total_sum = array1.reduce((acc,curr_val) => acc + Number(curr_val.description),0)

    return new Promise((resolve,reject) => {
        if(total_sum > 35){
            resolve("Promise resolved")
        }
        else{
            resolve("Promise rejected")
        }
    })

}

function fun1(){

    let arr1 = [Symbol(4),Symbol(8),Symbol(9),Symbol(3)]

    let first_element = arr1.shift()

    fun2(first_element,arr1)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(error)
    })
}

fun1()

