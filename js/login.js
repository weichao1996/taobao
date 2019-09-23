$(function(){


	$("#submit").click(function(){
			 var strName=$("#username").val();
             var strPass=$("#userpassword").val()


			//“记住密码”被选中,信号量keySave为1，否则为0
			if(document.getElementById("chkSave").checked){
                 localStorage.setItem("keySave",1);
                 }
				 else{localStorage.setItem("keySave",0);}


			//用户密码验证
			 if(strName==localStorage.getItem("keyName")&&strPass==localStorage.getItem("keyPass")){

				window.location.href="index.html";
				
				//管理员密码验证
			 }else if(strName=="admin"&&strPass=="123456"){

				window.location.href="admin.html";

			 }//验证失败
			 else{alert("用户名或密码不正确")}
           
		  
	})

})

//网页加载
function pageload(){
		  alert("用户请自行注册，管理员账号admin，密码123456")
          var strName=localStorage.getItem("keyName");
          var strPass=localStorage.getItem("keyPass");
		  //默认记住用户名
          if(strName){
             document.getElementById("username").value=strName;
             }
			//当上次勾选“记住密码”时，这次就会显示密码，并让“记住密码”继续被选中
             if(localStorage.getItem("keySave")==1){
                 document.getElementById("userpassword").value=strPass;
			     document.getElementById("chkSave").checked=true;
                 }
         }