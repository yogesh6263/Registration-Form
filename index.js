function validation(){
    if(document.formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter username*";
        return false;
    }
    else if(document.formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Atleast six Letter*";
        return false;
    }
    else if(document.formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter Your Email*";
        return false;
    }
    else if(document.formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your password*";
        return false;
    }
    else if(document.formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6 digit only*";
        return false;
    }
    else if(document.formfill.CPassword.value==""){
        document.getElementById("result").innerHTML="Enter Confirm Password*";
        return false;
    }
    else if(document.formfill.CPassword.value!==document.formfill.Password.value){
        document.getElementById("result").innerHTML=" Password does not matched*";
        return false;
    }
    else if(document.formfill.CPassword.value==document.formfill.Password.value){
        popup.classList.add("open-slide")
        return false;
    }
}
var popup=document.getElementById('popup');
function closeslide(){
    popup.classList.remove("open-slide")
}