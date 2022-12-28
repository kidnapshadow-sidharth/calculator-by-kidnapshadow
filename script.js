// declared outputscreen as a (variable) to store  output screen number
let outputscreen = document.getElementById("output-screen");
function display(num){
    outputscreen.value += num;
}
// calculate code
function calculate(){
    try{
        outputscreen.value = eval( outputscreen.value);
    }
    catch(err){
        alert("invalid check operation")

    }

}

// clear the screen code

function cl(){
    outputscreen.value = "";
}

// delete the screen code

function del(){
    outputscreen.value =  outputscreen.value.slice(0,-2)   
}
// source code written by kidnapshadow(sidharth)