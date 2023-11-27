








function validate(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result").value;


    result.style.color = "#fff";
    result.style.background = "#f00";
    result.style.padding = "10px";
    result.style.transition = "all is liner";
    result.style.textAlign = "center";
    if( user=="" &&email=="" &&pass=="" &&confirm==""){
       result.innerHTML = "Enter Data in Form";
       return false;
        }else if(user.lengh<5 || user.lengh>15){
            result.innerHTML  = "Enter 5-15 charcter in username";
            return false;
        }else if(email.indexOf('@',3)==-1){
            result.innerHTML = "Enter vaild Email";
            return false;
        }else if(pass.lengh<8){
            result.innerHTML = "Enter AT Least 8 char in pass";
            return false;
        }else if(pass !=confirm){
            result.innerHTML = "Matching password";
            return false;
        }else{
            return true;
        }



}
















