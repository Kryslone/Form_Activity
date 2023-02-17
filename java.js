
function inputPass() {
    var pass = document.rF.password.value;
    if (pass.length<8)
    {
        document.getElementById("display1").innerHTML="Password must be at least 8 characters.";
        return false;
    }
    else
    {
        document.getElementById("display1").innerHTML=" ";
        return true;
    }
}
function inputAge() {
var date = document.rF.dataofbirth.value;
var i = date.split("-");
var age = 2023 - i[0];
    if(age<21)
    {
        document.getElementById("display2").innerHTML="Minors are not allowed!";
        return false;
    }
    else
    {
        document.getElementById("display2").innerHTML=" ";
        return true;
    }
}
function checkifValid() {
    if (inputPass()&&inputAge())
    {
        document.getElementById("display3").innerHTML="Hooray! Your account has been successfully created.";
    }
    else
    {
        document.getElementById("display3").innerHTML=" ";
    }
}