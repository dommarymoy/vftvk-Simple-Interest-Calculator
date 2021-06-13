function compute()
{
    //Get the values from the input
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var error = false;
    
    //Check the amount field
    if(parseInt(principal) <= 0 ){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        error = true;
    }
    //Check if the field is blank
    if(principal === ""){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        error = true;
    }
    
    if(error === false){

        //Get the year
        var year = new Date().getFullYear()+parseInt(years);
        // Get the interest
        var interest = principal * parseInt(years) * rate /100;
        
        //Results
        document.getElementById("result").innerHTML="If you deposit  \<mark\>"+principal+", \</mark\> \<br\>at an interest rate of \<mark\>"+rate+"%\</mark\>. \<br\>You will receive an amount of \<mark\>"+interest+",\</mark\> \<br\>in the year \<mark\>"+year+"\</mark\> \<br\>";
    }
}

function updateRate() {
    //Update the rate value when the slider is modified
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
        