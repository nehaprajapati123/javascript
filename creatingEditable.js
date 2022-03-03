console.log("EDITABLE");

// create a new element
let divElem = document.createElement('div');


// add text to that created element
let val=localStorage.getItem('text');
let text;
if (val==null){
    text = document.createTextNode("this is my element")
}
else{
    text=document.createTextNode(val);
}
divElem.appendChild(text)

// giving element style ,id , class
divElem.setAttribute("id", "Elem");
divElem.setAttribute("class", "Elem");
divElem.setAttribute('style', 'border:2px solid black; width: 164px; margin: 34px; padding:23px 45px 23px 23px;  background-color:crimson');


// grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('MyFirst');



container.insertBefore(divElem, first);
console.log(divElem, container, first);


// add event listener to the divElem
divElem.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas ==0){
    let html = Elem.innerHTML;
    divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    }
    //listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        Elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
});

