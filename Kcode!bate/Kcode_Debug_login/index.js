function goLoginPage(){
    passwd=document.formno1.passwd.value;
    if(passwd=="K526078"){
     location.href=".KAPI.html";
    }else{
     alert('パスワードが違います');
    }
   }
