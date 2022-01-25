// while loop
// i=0
// while (i<10){
//     console.log(i);
//     i+=1
// }

// i=0
// while (i<7){
//     if (i%2==0){
//         console.log(i);
       
//     }
//     i+=1
// }



// for loop
// for(var i=1;i<10;i+=1){
//    if ( i%2==0){
//     console.log(i);
//    }
// }


// do loop:-
// var i=1
// do{
//   if(i%2==1){
//   console.log(i)
//   }
//   i++
// }
// while (i <=10)

// inner console:-
// var a=1
// var b=5
// do{
//     console.log(a*b);
//     a++
// }
// while (a<4)


// outer console:-
// let i=0
// let sum=0
// do{
//     sum=sum+i
//     i++
// }
// while (i<=10)
// console.log(sum);


// increment outside:- give Unexpected identifier
// let i=0
// do{
// i++
// while (i<4)

// for in and for of:-.................................
// let input=require("readline-sync")
// var name=input.question("enter the name ")
// for(i in name){
//     console.log(name[i]);
// }
// for(i of name){
//     console.log(i);
// }


// campus=["bangalore","pune","sarjapur"]
// for (let i in campus){
//     console.log(i);
// }
// console.log("................");
// for(let i of campus){
//     console.log(i);
// }

// dress={"tshirt":"red","skirt":"yello"}
// for (let i in dress){
//     console.log(i,":",dress[i]);
// }
// for(let i of dress){
//       console.log(i,":",dress[i]);

// }

// const birds={name:"Bald Eagle",type:"Hawk",ScientificName:"HaliaeetusLeucocephalus"}
          
// console.log(Object.keys(birds))
// console.log(Object.values(birds))

// gir={"neha":"faith","shaheen":"shaitan"}
// console.log(Object.keys(gir))
// console.log(Object.values(gir))
// console.log(Object.keys(gir).length);


// negative indexing...............................


// que1:-
// const n=require("readline-sync");
// var name=n.question("enter name: ")
// let i=name.length-1;
// var string=""
// while(i>=0){
//    string=string+name[i]
//    i--
// }
// if (string===name){
//     console.log("palindrome");
// }
// else{
//     console.log("not palindrome");
// }

// let a=require("readline-sync")
// var name=a.question("enetr your name: ")
// var c=1;
// var i=0
// while(i<name.length){
//     console.log(c,name[i]);
//     i++
//     c++
// }


// que2:
// let a=require("readline-sync")
// var num=a.questionInt("enter your number: ")
// var i=1;
// var c=0;
// while(i<=num){
//     if (num%i==0){
//         c=c+1;
//     }
//     i=i+1
// }
// if (c===2){
//     console.log("prime number");
// }
// else{
//     console.log("not prime number");
// }

// que4:-
// let a=require("readline-sync")
// var num=a.questionInt(" number: ")
// for(i=1;i<=10;i++){
//     console.log(num,"*",i,"=",num*i);
// }

// que6:-
// for(let i=1;i<=100;i++){
//     console.log(i);
// }

// que7:-
// for(i=1;i<=100;i++){
//     if(i%7==0){
//         console.log(i);
//     }
// }

// que8:-
// var sum=0
// for(i=1;i<=100;i++){
//     sum=sum+i
// }
// console.log(sum);

// que9:-
// let a=require("readline-sync")
// var i=1;
// var sum=0
// while (i<=10){
//     num=a.questionInt(" enetr number:- ")
//     sum=sum+num
//     i++
// }
// console.log(sum);
// 10+16+9+10+56+78+98+43+21+76.

// for(i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(-i);
//     }
//     else{
//         console.log((i));
//     }
// }

// for(i=1;i<=20;i++){
//     if(i%3==0 && i%7==0){
//         console.log("navgurukul");
//     }
//     else if(i%3==0){
//         console.log("nav");
//     }
//     else if(i%7==0){
//         console.log("gurukul");
//     }
//     else{
//         console.log(i);
//     }
// }

// que13:-.............................
// c=1
// for(i=156;i<166;i++){
//     console.log(c);
//     c++
// }

// que14..................................
// let r=5;
// while (r>0){
//     let c=5;
//     string=""
//     while (c>0){
//         string+=r
//         c=c-1
//         }
//     console.log(string)
//         r=r-1
// }



// ascii number:-.............................
// var ch = 'a';
// var index = 0;
// var i = index.charCodeAt(ch);
// console.log(i);



// ascii alphate:-.............................debug 1

// let n=require("readline-sync");
// let choose_ascii=(n.questionInt("enter number: "));
// var ascii_char=97+choose_ascii
// for (var i=97;i<ascii_char;i++) {
//     console.log(String.fromCharCode(i));
// }

// debug2:-.............................................max in array

// let c=require("readline-sync");
// let loop_time=c.question("enter loop time: ");
 
// var maxi=0;
// let lis=[ ]
// for (let i=1;i<=loop_time;i++) {
//    let num=c.question("enter number: ")
//    lis.push(num)
// }
// let a=0
// for(let i=0;i<lis.length;i++){
//     if (lis[i]>a){
//         a=lis[i]
//     }
// }
// console.log(a,"greatest in",lis);





// debug3:-.........................................
// const result = {
//     success: ["max-length", "no-amd" ,"prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
//   };
//   const success=result.success
// //  console.log(success);
//  const store=success.length
// //  console.log(store);
//  for(const value in success){
//    console.log(success[value])
//  }


