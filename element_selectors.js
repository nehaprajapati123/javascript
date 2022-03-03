console.log("element selector");
// single Elementselector

let element=document.getElementById('MyFirst')

// element=element.className
// element=element.childNodes
// element=element.parentNode;     
// element.style.color='red'
// element.innerText='satyam-shukla'

// console.log(element);

// selector..................................................................
// let sel = document.querySelector('#MyFirst')
// sel = document.querySelector('.child')
// sel = document.querySelector('div')
// sel.style.color="greenh"
// console.log(sel);

// multiple Elementselector
let elem=document.getElementsByClassName('container')
// console.log(elem);
// console.log(elem[0].getElementsByClassName('child '));

elem=document.getElementsByTagName('div')
// console.log(elem);
Array.from(elem).forEach(element=>{
    console.log(element);
    element.style.color='crimson'
});






