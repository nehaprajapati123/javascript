console.log("let's start traversing");

console.log(this);

// console.log(this);
// function fun(num){
//     console.log(num);
    console.log(this);
// }
// fun(4)


let obj={
    name:"neha",
    friend:"friend",
    dic:function(){
        console.log(2+4);
        console.log(this);
        console.log(this.friend);
    }
}
obj.dic()



// console.log(this);


