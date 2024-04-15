const input = document.getElementById("switch");
const body = document.querySelector("body");

input.addEventListener("input", (event)=>{
    if(event.target.value==1){
        body.classList.remove("theme-2");
        body.classList.remove("theme-3");
    }else if(event.target.value==2){
        body.classList.add("theme-2")
        body.classList.remove("theme-3")
    }else if(event.target.value==3){
        body.classList.add("theme-3")
        body.classList.remove("theme-2")
    }
})

let display = document.getElementById("display");

function appendToDisplay(value){
    display.value +=value;
}
function clearDisplay(){
    display.value = "";
}
function deleteLast(){
    display.value=display.value.slice(0, -1);
}

function calculate(){
    try{
        display.value = 
        eval(display.value);
    }catch (error){
        display.value = `Error`
    }
}