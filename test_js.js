// question no 01

let arr=[2,54,6,7746,362,23,32,3]
let high = 0;
for(let i=0; i<arr.length;i++){
    if (arr[i]> high)
        high = arr[i]
}
console.log(high)

// question no 02

let array2 = [1,2,3,4,5,6,7,8,9]
let reversedArray;
const revArray = function (getArray){
    for(let i=getArray.length-1;i>=0;i--)
    {
        console.log(getArray[i])
    }
      
}
revArray(array2)

//question no 04 

const filFunc = function (getArr){
    let newArr=getArr.filter( (num)=> (num % 2 != 0)
   
     )
     console.log(newArr)
}
filFunc(array2)

// question no 05

let redArray=[1,2,3,4,5]
 let redMethod=redArray.reduce( (acc, cval)=>{
    return acc + cval ;

},0)
 console.log(redMethod);






// objects

//question no 01

const empObj={

}

const checkEmptyObj=function(getObj){
      if(Object.keys(getObj) == 0 || Object.values(getObj)== 0)
        return 'Object is empty';
    else{
        return 'object is not empty'
}
}
console.log(checkEmptyObj(empObj))

// question no 02

let object2  = {
        uName:"ALi",
         age:"27",
        occupation: "none"
     };

let printObj=function(getObj){
    return `Name of person is ${getObj.uName}, its age is ${getObj.age}, and occupation is ${getObj.occupation}`
}
console.log(printObj(object2))

// question no 03

// Write a function that takes an object and returns an array of its keys

const keyFunc = function (getObj){
    return Object.keys(getObj);
}
console.log(keyFunc(object2))

// Write a function that takes an object and returns an array of its values


const valFunc = function (getObj){
    return Object.values(getObj);
}
console.log(valFunc(object2))

// Write a function that takes an object and returns an array of key-value pairs.

const eleFunc = function (getObj){
    return Object.entries(getObj);
}
console.log(eleFunc(object2))

// functions

let num=5;

const Factorial=function(num){
    for (let i = 0; i < num; i++) {
        
        
    }
}