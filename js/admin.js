var userJson = []; //普通用户信息


$(document).ready(function () {
		var btnHtml = '<div id="listBody"></div>';
		$("#jQueryList").append(btnHtml);
        //初始化已注册用户信息
        userJson = JSON.parse(localStorage.getItem("storageUserInfo")) == null ? [] : JSON.parse(localStorage.getItem("storageUserInfo"));
        preUserInfo = userJson;
        tableDataSetup("#listBody", preUserInfo);

})

//渲染表格数据
function tableDataSetup(divIdName, dataText) {
    var bodyTr = "";
	var headStr = "<tr><th class='t1'>序号</th>";
	headStr+="<th class='t2'>用户名</span></th>";
	headStr+="<th class='t3'>密码</span></th>";
	headStr+="<th class='t4'>手机号码</span></th>";
	headStr+="<th class='t5'>操作</span></th></tr>";
	
	var listHtml = "<table id='content'>" + headStr;
    for (var i = 0; i < dataText.length; i++) {
        var j = i + 1;
        bodyTr +=
            "<tr>" +
            "<td class='t1'>" + j + "</td>" +
            "<td class='t2'>" + dataText[i].strName + "</td>" +
			"<td class='t3'>" + dataText[i].strPass + "</td>" +
            "<td class='t4'>" + dataText[i].strPhone + "</td>" +
			"<td><a href='#' onclick='deleteUser(" + i + ");'>删除</a></td>" +
            "</tr>";

    }
	 if (bodyTr == '') {
        bodyTr+="<tr><td colspan='4'>暂无数据<td></tr>";
    }
	listHtml += bodyTr;		
	listHtml += "</table>";
    $(divIdName).html("");
    $(divIdName).append(listHtml);
 
   
}

//删除用户
function deleteUser(index) {
    var delUserName = preUserInfo[index].strName;
    preUserInfo.splice(index, 1);
    if (confirm("确定要删除该记录吗？")) {
        for (var i = 0; i < userJson.length; i++) {
            if (userJson[i].strName == delUserName) {
                userJson.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("storageUserInfo", JSON.stringify(userJson));
        userJson = JSON.parse(localStorage.getItem("storageUserInfo")) == null ? [] : JSON.parse(localStorage.getItem("storageUserInfo"));
        tableDataSetup("#listBody", preUserInfo);
    };
    
}