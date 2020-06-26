var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var error4 = document.getElementById("error4");
var error6 = document.getElementById("error6");
var reg=/[0-9]/;
var reg1=/[A-Z]/;
var reg2=/[a-z]/;
var reg3=/[?*@#^$&!%]/;
var regexp=/^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})$/;


//email validation
function validate4(){
    if(email.value==""){
       error4.innerHTML="please fill out this field";
       email.style.border="1px solid red"
   error4.style.color="darkred";
       return false;
   }else{
       error4.innerHTML="";
       email.style.border="none";
   }
   if(!regexp.test(email.value)){
       error4.innerHTML="Invalid";
       error4.style.color="orange";
       return false;
   }
   return true;
   }


   //password validation
   function validate6(){
    if(pwd.value==""){
       error6.innerHTML="please fill out this field";
       pwd.style.border="1px solid red"
   error6.style.color="darkred";
       return false;
   }
   else{
       error6.innerHTML="";
       pwd.style.border="none";
       
   }
   if(pwd.value.length<8){
       error6.innerHTML="less than 8 characters";
     
       error6.style.color="orange";
       pwd.border="2px solid red";
       return false;
   
   }else  if(!reg.test(pwd.value)){
    error6.innerHTML="must contain atleast one number";
    error6.style.color="orange";
    return false;
   }else  if(!reg1.test(pwd.value)){
    error6.innerHTML="must contain atleast one uppercase";
    error6.style.color="orange";
    return false;
   }else  if(!reg2.test(pwd.value)){
    error6.innerHTML="must contain atleast one lowercase";
    error6.style.color="orange";
    return false;
   }else  if(!reg3.test(pwd.value)){
    error6.innerHTML="must contain atleast one special character";
    error6.style.color="orange";
    return false;
   }else if(reg.test(pwd.value)&&reg1.test(pwd.value)&&reg2.test(pwd.value)&&reg3.test(pwd.value)&&(pwd.value.length==8)){
   
    alert("poor password");
   
    return true;
   }
   else if(reg.test(pwd.value)&&reg1.test(pwd.value)&&reg2.test(pwd.value)&&reg3.test(pwd.value)&&(pwd.value.length>12)){
       alert("strong password");
       return true;
     
   }else if(reg.test(pwd.value)&&reg1.test(pwd.value)&&reg2.test(pwd.value)&&reg3.test(pwd.value)&&(pwd.value.length<=12)){
    alert("medium password");
   return true;
    
   }
   return true;
   }