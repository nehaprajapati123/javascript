// exercise1:-
// function sayBye(name){
//     return "bye"+" "+name}
// console.log(sayBye("neha"));





// exercise2:-
// function displayMultiply(a,b,c,){
//     return a*b*c
// }
// console.log(displayMultiply(1,2,3));






// exercise3:-
// function sum(a,b){
//     return a+b
// }
// console.log(sum(1,2));






// var greet = "Hello World!";

// function greetWorld() {
//     console.log(greet);
//    }
//    greetWorld(); // Outputs: Hello World!
//    console.log(greet);




// function express:-........................................
// var getsum=function(num1,num2){
//     return num1+num2
// }
// console.log(getsum(1,2));



// var isEqual = function(str1,str2){
//     console.log(str1===str2)
//  }
//  isEqual("kumar","nayak");              output>>>> false   




// self invoking/calling:-.............................................
// (function name(i){
// console.log(     "hello"+ " "+i
// );})("neha")

// que:-
// (function  name(name1,name2){
//     console.log(name1===name2);
// })("neha","ritesh")





// que4:-
// var a=function(name1,name2){
//     return (name1===name2)
// }
// console.log(a("neha","rietsh"));





// function getResult(num1,num2,num3){
//     console.log(num1-num2+num3)
//    }
//  getResult(2,3,4,5);





// que8:-
// (function name(name1,name2){
//     console.log(name1===name2);
// })("neha","ritesh")




// que9:- 1.
// const a=require("readline-sync")
// const name=a.question(" enetr your name")
// const profession=a.question("enetr your profession")
// function functionprintlines(){
//     console.log("mera naam",name,"hai");
//     console.log("mai navgurukul ki",profession,"hu");
// } 
// functionprintlines()

// 2.
// function functionprintlines(str1,str2){
//     console.log(str1);
//     console.log(str2);
// }
// functionprintlines("mera naam neha hai","mai navgururkul ki student hu")





// que10:-
// function isGreaterThen20(i){
//         if(i>=20){
//             return true}
// }
// function students(list){
//     c=0
//     for(i of list){
//         var result=isGreaterThen20(i)
//         {if(result==true){
//             c+=1
//     }}}
//     return c;
// }
// console.log(students([12,3,4,24,30,20,26,14,17,25,8,24,22,5,12,17,10]));





// que11:-
// function add_numbers(num1,num2){
// console.log(num1+num2);
// }
// add_numbers(56,12)



// que12:-
// function add_numbers(num1,num2){
//     for(i in num1){
//         console.log(num1[i]+num2[i]);
//     }
// }
// add_numbers( [50, 60, 10] , [10, 20, 13] )




// que13:-
// function check_numbers(num1,num2){
//     if(num1%2==0 && num2==0){
//         console.log("both are even");}
//     else{
//         console.log("both are not even");
//     }
// }
// check_numbers(34,21)




// que14:-
// function checknumberslist(list1,list2){
//     for(i in  list1){
//         if(list1[i]%2==0 && list2[i]%2==0){
//             console.log("both are even");}
//         else{
//             console.log("both are not even");
//         }
//     }
// }
// checknumberslist([2, 6, 18, 10, 3, 75], [6, 19, 24, 12, 3, 87])




// que15:-
// function eligibleforvote(age){
//     if(age>=18){
//         console.log("you are eligible");
//     }
//     else{
//         console.log("you are not eligible");
//     }
// }
// var a=require("readline-sync")
// var age=a.questionInt("enter your age:- ")
// eligibleforvote(age)




// que16:-
// function perfect(num){
//     sum=0
//     for(i=1;i<num;i++){
//         if(num%i==0){
//             sum=sum+i
//         }
//     }
// if (sum===num){
//     console.log(num,"perfect number");
// }
// else{
//     console.log(num,"not perfect number");
// }
// }
// var a=require("readline-sync")
// var num=a.questionInt("enter your number:- ")
// perfect(num)



// que17:-
// function average(num1,num2,num3){
//     console.log("sum of numbers: ",num1+num2+num3);
//     console.log("average of numbers: ",num1+num2+num3/3);
// }
// var a=require("readline-sync")
// var num1=a.questionInt("enter your first number")
// var num2=a.questionInt("enter your first number")
// var num3=a.questionInt("enter your first number")
// average(num1,num2,num3)



// que18:-
// function showNumbers(limit){
//     for(i=0;i<=limit;i++){
//         if(i%2==0){
//             console.log(i,"even");
//         }
//         else{
//             console.log(i,"odd");
//         }
//     }
// }
// var a=require("readline-sync")
// var limit=a.questionInt("enter the limit:  ")
// showNumbers(limit)



// que19:-
// function multiplesOfNumbers(limit){
//     sum=0
//         for(i=1;i<=limit;i++){
//             if(i%3==0 || i%5==0){
//                 console.log(i);
//                 sum=sum+i
//             }
//         }console.log(sum);
// }
// var a=require("readline-sync")
//  var limit=a.questionInt("enter the limit:  ")
// multiplesOfNumbers(limit)




// que20:-
// function license_checker(speed){
//     var points=(speed-70)/5
//     if (speed<70){
//         console.log("ok");
//     }
//     else if(speed>=70 && speed<=74){
//         console.log("slow down the speed");
//     }
//     else 
//     {if(speed>=75){
//         if(points>=12){
//             console.log(points,"license suspend");
//         }
//         else{
//             console.log(points,"warn you too slow your speed");
//         }
//     }
// }
// }
// var a=require("readline-sync")
//  var speed=a.questionInt("enter the speed:  ")
// license_checker(speed)





// que21:-
// function length(name1,name2){
//     if(name1.length===name2.length){
//         console.log(name1);
//         console.log(name2);
//     }
//     else if(name1.length>name2.length){
//         console.log(name1);
//     }
//     else{
//         console.log(name2);
//     }
// }
// var a=require("readline-sync")
// var name1=a.question("enter the first name:  ")
// var name2=a.question("enter the second name:  ")

// length(name1,name2)




// que22:-
// function squaresofnumbers(limit){
//     var dic={}
//     for(i=1;i<=limit;i++){
//     dic[i]=i*i
//     }
//     console.log(dic);
// }
// var a=require("readline-sync")
// var limit=a.questionInt("enter the limit:  ")
// squaresofnumbers(limit)











// functions:-
// 1.name function:-
function a(i){
    console.log(i);
}a("neha")



// 2.self involk function:-
(function a(i){
    console.log(i);
}("neha"))



// 3.anonymous function/ function expression:-
const a=function(i){
    console.log(i);
}
a("neha")



// 4.arrow function:-
const a=(i)=>{
    console.log(i);
}
a("neha")