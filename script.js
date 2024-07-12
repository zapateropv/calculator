const display = document.querySelector('#display');
const clear = document.querySelector('.clear');



function toDisplay (input){

 display.value += input

}



clear.addEventListener("click", () => display.value = "" )

function equal (){

 try{

    display.value = eval(display.value).toFixed(2)

 }

    catch(error){
        display.value = "error"
    }

}







