function goLoginPage(){
    passwd=document.formno1.passwd.value;
    if(passwd=="tarako"){
     location.href=".KAPI.html";
    }else{
     alert('パスワードが違います');
    }
   }
