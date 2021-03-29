let numberbox= document.querySelector("#numberbox");
let plus= document.querySelector("#plus");
let minus= document.querySelector("#minus");
let reset= document.querySelector("#reset");


let number = 0;

plus.addEventListener('click', function()
{
    let existing_number= numberbox.value;
    number= existing_number;
number++;
numberbox.value= number;
})

minus.addEventListener('click', function()
{

    let existing_number= numberbox.value;
    number= existing_number;
number--;
numberbox.value= number;
})

reset.addEventListener('click', function()
{
numberbox.value= number;
number= 0;

numberbox.value= number
})