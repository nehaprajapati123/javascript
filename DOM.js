console.log("smj aya??");
let a = document;
a = document.all;
// a= document.body


// Array.from(a).forEach(function(element){

//     console.log(element);
// })


// a = document.links[0]
// a= document.scripts;
// a= document.images;

a=document.links
let name="harry"

Array.from(a).forEach(function(element){
    if(String(element).includes(name)){
        console.log(element.href);
    }  
})

console.log(a);
