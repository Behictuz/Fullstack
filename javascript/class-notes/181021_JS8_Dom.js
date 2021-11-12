// DOM Accessing

//Id ile ulasma
let firstNameById = window.document.getElementById("first_name");
window.console.log(firstNameById);

let lastNameById = window.document.getElementById("last_name");
window.console.log(lastNameById);

//Class ile

let firstNameByClass = document.getElementsByClassName("input--style-4")[0];
console.log(firstNameByClass);

//name ile 

let firstNameByName = document.getElementsByName("first_name")[0];
console.log(firstNameByName);


//Tag name

let firstNameByTagName = document.getElementsByTagName("input")[0];
console.log(firstNameByTagName);

// Query Selector

let firstNameByQuerySelectorId = document.querySelector("#first_name");
console.log(firstNameByQuerySelectorId);

//Query Selector mit Class

let firstNameByQuerySelectorClass = document.querySelector(".input--style-4");
console.log(firstNameByQuerySelectorClass);

// Queryselector All

let firstNameByQuerySelectorAllClass = document.querySelectorAll(".input--style-4")[0];
console.log(firstNameByQuerySelectorAllClass);


// Property vs. attribute

// id class name hepsi birer attribute

let idAttr=firstNameById.getAttribute("id");
console.log(idAttr);
let classAttr=firstNameById.getAttribute("class")
console.log(classAttr);

let lastNameidAttr= lastNameById.getAttribute("id");
console.log(lastNameidAttr);

let classProperty= firstNameById.className;
console.log(classProperty);

firstNameById.value="Behic";
lastNameById.value="Tuez";



// Code Challenge  Full Name (camelcase => BEHIC TÜZ)  and (email (lovercase => behic.tuz@gmail.com))   


let fullNameById = document.getElementById("full_name");
window.console.log(fullNameById);
let email = document.getElementsByName("email")[0];
window.console.log(email);

fullNameById.value=`${firstNameById.value.toUpperCase()
} ${lastNameById.value.toUpperCase()}`;
email.value=`${firstNameById.value.toLowerCase()}.${lastNameById.value.toLowerCase()}@clarusway.com`;


// innerText , innerHTML , text Content

