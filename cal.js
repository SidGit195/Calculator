function appendToDisplay(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function calculateDisplay(){
    var expression = document.getElementById("display").value;
    try{
        var result = eval(expression);
        document.getElementById("display").value = result;
    }
    catch(error){
        document.getElementById("display").value = "ERROR";
    }
}