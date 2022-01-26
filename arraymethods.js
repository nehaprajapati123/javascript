// concat:-joining one or more array.....................................
// var arr1=["neha","ruby","namrata"]
// var arr2=["ruby"]
// var arr3=[1,2,3,4]
// var lis1=arr1.concat(arr2)
// var lis2=arr1.concat(arr2,arr3)
// console.log(lis1);
// console.log(lis2);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.constructor;
// console.log(text);

// var a=new(Array)
// a[1]="neha"
// console.log(a);

// push:-......add item in end.....................................................
// var arr=["1",2,3]
// ara.push("neha")
// console.log(ara );

// pop:-......remove item from end............................
// arr.pop()
// console.log(arr);

// shift:-.........remove item of [0].....................
// arr.shift()
// console.log(arr);

// unshift:-..........add item on[0].............................
// arr.unshift(5)
// console.log(arr);


// arr.indexOf(3)........................give the index of a particular item...
// console.log(arr.indexOf(3));

// splice:-...................remove element
var arr=["neha",1,"4",true]
// arr.splice(0,1)
// console.log(arr);

// remove=arr.slice(0,2)
// console.log(remove);

// splice:-.........................
// arr.splice()
// arr.splice(3)
// arr.splice(1,2)
// arr.splice(1)
// console.log(arr);

// negative accessing.............................
// console.log(arr[arr.length-2]);


// contructor property:-........................................
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.constructor;
// console.log(text);

// length property:-........................
const fruits = ["Banana", "Orange", "apple", "Mango"];
// console.log(fruits.length);



// enteries:-....................gives the pair of key-value while iterating through array
// a=fruits.entries()
// for (var i of a){
//     console.log(i);
// }


// includes:-....................search the item in array from the index gives......
console.log(fruits.includes("Mango"));
console.log(fruits.includes("Banana", 0));