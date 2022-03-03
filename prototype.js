// let obj={
//     name:"neha",
//     city:"delhi",
//     dic:function(){
//         console.log(this.name);
//     }
// }
// obj.dic()
// let arr=["neha","ritesh"] 

// let obje={
//         name:"neha",
//         city:"delhi",
//         address:"himachal",
// }
// function obj(givename){
//      this.name=givename;
// }

// obj.prototype.getname=function(){
//     return this.name;
// }

// let obj2=new obj("ritesh");
// console.log(obj2)





let Mobile=function(model_no){
    this.model=model_no;
    this.price=3000;

}
let samsung=new Mobile('galaxy')
let nokia=new Mobile("3310")

Mobile.prototype.color="white"
console.log(samsung);
console.log(nokia);


const names = new Array('wes', 'kait');
const wes = new Object({ name: 'wes' });
console.log(names);
console.log(wes);