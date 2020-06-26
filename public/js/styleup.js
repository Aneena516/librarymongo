var username = document.getElementById("username");
var dob = document.getElementById("dob");
var gender1 = document.getElementById("gender1");
var gender2 = document.getElementById("gender2");
var email = document.getElementById("email");
var num = document.getElementById("num");
var pwd = document.getElementById("pwd");
var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
var error3 = document.getElementById("error3");
var error4 = document.getElementById("error4");
var error5 = document.getElementById("error5");
var error6 = document.getElementById("error6");
var pwd1 = document.getElementById("pwd1");
var error7 = document.getElementById("error7");
var error9 = document.getElementById("error9");
var address = document.getElementById("address");
var error8 = document.getElementById("error8");
var regexp=/^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})$/;
var regexp1 = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
var regexp2 = /^((\d{10})|(\d{3}\-\d{3}\-\d{4})|(\d{3}\.\d{3}\.\d{4})|(\d{3}\s\d{3}\s\d{4}))$/;
var reg=/[0-9]/;
var reg1=/[A-Z]/;
var reg2=/[a-z]/;
var reg3=/[?*@#^$&!%]/;




//username validation
function validate1(){
if(username.value==""){
error1.innerHTML="please fill out this field";
username.style.border="1px solid red"
error1.style.color="darkred";
 return false;
}else{
error1.innerHTML="";
username.style.border="none";
}
if(username.value==email.value){
    error1.innerHTML="username and email should not be equal";
    error1.style.color="orange";
    return false;
}
return true;
}

//DOB validation
function validate2(){
 if(dob.value==""){
  error2.innerHTML=  "please fill out this field"; 
  dob.style.border="1px solid red"
error2.style.color="darkred";
    return false;
}else{
    error2.innerHTML="";
    dob.style.border="none";
   
}
if(!regexp1.test(dob.value)){
    error2.innerHTML="enter date in dd/mm/yyyy";
    error2.style.color="orange";
    return false;
}
return true;
}

//gender validation
function validate3(){
 if(gender1.checked==""&&gender2.checked==""){
    error3.innerHTML="please fill out this field";
    
error3.style.color="darkred";
    return false;
}
else{
    error3.innerHTML="";
  
}
return true;
}

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

//mobile no. validation
function validate5(){
 if(num.value==""){
  error5.innerHTML="please fill out this field";
  num.style.border="1px solid red"
error5.style.color="darkred";
    return false;
}else{
    error5.innerHTML="";
    num.style.border="none";
}
if(!regexp2.test(num.value)){
    error5.innerHTML="not in regular form";
    error5.style.color="orange";
}
return true;
}

//address validation
function validate8(){
    if(address.value==""){
     error8.innerHTML="please fill out this field";
     address.style.border="1px solid red"
   error8.style.color="darkred";
       return false;
   }else{
       error8.innerHTML="";
       address.style.border="none";
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
}else if(pwd.value==username.value){
error6.innerHTML="password be different from name";
error6.style.color="orange";
pwd.style.border="2px solid red";
return false;
}


else  if(!reg.test(pwd.value)){
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

//confirm password validation
function validate7(){
    if(pwd1.value==""){
       error7.innerHTML="please fill out this field";
       pwd1.style.border="1px solid red"
   error7.style.color="darkred";
       return false;
   }
   else{
       error7.innerHTML="";
       pwd1.style.border="none";
       
   }
   if(pwd1.value!=pwd.value){
    error7.innerHTML="Please check that you've entered and confirmed your password!";
    error7.style.color = "orange";
    return false;
   }
   return true;
   }


   function validate8(){
    if(gend1.checked==""&&gend2.checked==""){
       error9.innerHTML="please fill out this field";
       
   error9.style.color="darkred";
       return false;
   }
   else{
       error9.innerHTML="";
     
   }
   return true;
   }