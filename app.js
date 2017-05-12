function onLoad(){
    //alert("Funtion onLoad Called");
    document.getElementById("timestamp").innerHTML= Date();
}

function checkNumber(){
    var theNumber, theMessage;

    theNumber = document.getElementById("smallnumber").value;

    //if x is  Not a number or less then one or greater than 10.
    if(theNumber < 1 || theNumber > 10) {
        theMessage = "Number was expected to be between 1 and 10";
    } else if(isNaN(theNumber)) {
        theMessage = "Please enter a Number";
    } else{
        theMessage = "Number is Good";
    }
    
    document.getElementById("numberMessage").innerHTML = theMessage;
}