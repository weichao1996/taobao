   var userJson = []; //普通用户信息
	
	$(function(){
    //$(".registerform").Validform();  //就这一行代码！;
    //注册验证
    var demo=$(".commentForm").Validform({
        tiptype:3,
        label:".label",
        showAllError:true,
        datatype:{
            "zh1-6":/^[\u4E00-\u9FA5\uf900-\ufa2d]{1,6}$/
        },
        ajaxPost:true
    });
    //通过$.Tipmsg扩展默认提示信息;
    //$.Tipmsg.w["zh1-6"]="请输入1到6个中文字符！";
    demo.tipmsg.w["zh1-6"]="请输入1到6个中文字符！"; 
    $('#userpassword').passwordStrength();  

    })
			
			 //注册提交
             function btnReg_click(){
             var strName=document.getElementById("username").value
             var strPass=document.getElementById("userpassword").value;
			 var strPhone=document.getElementById("userphone").value;
             localStorage.setItem("keyName",strName);
             localStorage.setItem("keyPass",strPass);

		var userInfo = {
			'strName': strName,
			'strPass': strPass,
			'strPhone': strPhone
		};
		userJson.push(userInfo);

		localStorage.setItem("storageUserInfo", JSON.stringify(userJson));

        document.getElementById("spnStatus").className="status";
        document.getElementById("spnStatus").innerHTML="提醒：恭喜您，注册成功！请牢记您的会员名及密码";
		alert("您的会员名为："+document.getElementById("username").value+"\n您的密码为："+document.getElementById("userpassword").value);
       }