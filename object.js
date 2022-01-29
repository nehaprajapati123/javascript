vegetable={
    "veg1":"brinjal",
    "veg2":"potato",
    "veg3":"ladyfingure"
}

// accessing:-................................................
// dot notation:-
// console.log(vegetable.veg1);

// bracket notation:-\
// console.log(vegetable["veg1"]);





// udating:-......................................................
// vegetable["veg2"]="tomato"
// console.log(vegetable);

// vegetable.veg1="carrot"
// console.log(vegetable);




// adding:-..........................................................
// vegetable.veg4="chilli"
// console.log(vegetable);

// vegetable["veg4"]="chili"
// console.log(vegetable);





// deleting:-.......................................................
// delete vegetable.veg1;
// console.log(vegetable);

// console.log(delete vegetable["veg1"]); >>>true

// delete vegetable["veg1"];
// console.log(vegetable);






// .hasOwnProperty:-....................................................
// console.log(vegetable.hasOwnProperty(["veg1"]));
// console.log(vegetable.hasOwnProperty(["veg5"]));
// console.log(vegetable.hasOwnProperty("veg1"));


// que1:-
// d1 = {'a': 100, 'b': 200, 'c':300}
// d2 = {'a': 300, 'b': 200, 'd':400}
// // output should be this: {'a': 400, 'b': 400, 'd': 400, 'c': 300}
// d3={}
// for(i in d1){
//     if(i in d2){
//         d3[i]=d1[i]+d2[i]
//     }
//     else{
//         d3[i]=d1[i] 

//     }
// }
// for(j in d2){
//    for(k in d3){
//        if (j===k){
//            d3[k]=d3[k]
//        }else{
//            d3[j]=d2[j]
//        }
//    }
// }console.log(d3);






// que2:-
// const a=require("readline-sync")
// limit=a.questionInt("enter the limti:-  ")
// dic={}
// for(i=1;i<=limit;i++ ){
//     dic[i]=i*i
// }
// console.log(dic);





// que3:-
// var mainString="My name is kumar, and my friend’s name is Dhamu"
// var a=mainString.split(" ")
// // console.log(c);
// c=0
// for(i of a){
//     if(i==="is"){
//         c++
//     }
// }
// console.log(c);





// que4:-
// var dic1={1:10, 2:20}
// var dic2={3:30,2:40}
// var dic3={5:50,6:60}
// output:-{1: 10, 2: 60, 3: 30, 5: 50, 6: 60}
// for(i in dic1){
//     for (j in dic2){
//         if(i===j){
//             dic3[i]=dic1[i]+dic2[j]
//            break}
//         else{
//             dic3[i]=dic1[i]
//             dic3[j]=dic2[j]
//         }
//     }
// }
// console.log(dic3);






// que5:-
// const a=require("readline-sync")
// const num=a.question("enter ")
// dict={"name":"Raju", "marks":56}
// result=dict.hasOwnProperty(num)
// if (result===true){
//     console.log("exist");
// }else{
//     console.log("not exist");
// }




// que6:-
// my_dict = {

//     'data1':100,
    
//     'data2': -54,
    
//     'data3': 247
    
//     }
// sum=0
// for(i in my_dict){
//     sum=sum+my_dict[i]
// }    
// console.log(sum);





// que7:-
// var my_dict= {
//     1: 'NAVGURUKUL',
//     2: 'IN',
//     3:{
//     'A' : 'WELCOME',
//     'B' : 'To',
//     'C' : 'DHARAMSALA'
//     }
//     }
    
// delete my_dict[3]["A"];
// console.log(my_dict);





// que8:-
// var list1=["one","two","three","four","five"]
// var list2=[1,2,3,4,5,]
// dic={}
// for(i in list1){
//     dic[list1[i]]=list2[i]
// }
// console.log(dic);




// que9:-
dic=[   {"first":"1"},
    {"second": "2"},
    {"third": "1"},
    {"four": "5"},
    {"five":"5"},
    {"six":"9"},
    {"seven":"7"}
    ]
// [2', '7', '9', '5', '1']
// list=[]
// for(i in dic){
//     // console.log(dic[i]);}
//   for(j in dic[i]){
//     //   console.log(dic[i][j]);}}
//     if(!list.includes(dic[i][j])){
//         list.push(dic[i][j])
//     }
//   }}console.log(list);
    



// que10:-
// const a=require("readline-sync")
// dic={}
// for(i=1;i<=10;i++){
//     var name=a.question("enter the name:  ")
//     var marks=a.questionInt("enter your marks:  ")
//     dic[name]=marks
// }console.log(dic);





// que11:-
// a="MISSISSIPPI"
// dic={}
// for(i of a){
//     c=0
//     for(j of a){
//         if (i==j){
//             c++
//         }
//     }dic[i]=c
// }console.log(dic);




// que12:-
// var dict = {'Alex': ['subj1', 'subj2', 'subj3'],'David': ['subj1', 'subj2']}
// c=0
// for(i in dict){
//    for(j in dict[i]){
//         c++
//     //    console.log(dict[i][j]);
//    }
// }console.log(c);







// que13:-
var my_dict = {
    'a':50,
    'b':58,
    'c':56,
    'd':40,
    'e':100,
    'f':20
    }
    // a=0
    // b=0
    // c=0
    // d=0
    // list=[]
    // for(i in my_dict){
    //     if(my_dict[i]>a){
    //         c=b
    //         b=a
    //         a=my_dict[i]
    //     }
    // }list.push(c)
    // list.push(b)
    // list.push(a)
    // console.log(list);
