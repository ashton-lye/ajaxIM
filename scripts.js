function ajaxRequest(method, url, async, data, callback){

	var request = new XMLHttpRequest();
	request.open(method,url,async);
	
	if(method == "POST"){
		request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	}
	
	request.onreadystatechange = function(){
		if (request.readyState == 4) {
			if (request.status == 200) {
				var response = request.responseText;
				callback(response);
			} else {
				alert(request.statusText);
			}
		}
	}
	
	request.send(data);
}

function login() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    var testUser = document.getElementById("tester");
    var testPass = document.getElementById("tester2");
    testUser.innerHTML = username;
    testPass.innerHTML = password;


    var url = "login.php";
    var data = "uname="+username+"&pword="+password;
    ajaxRequest("POST", url, true, data, "checkLogin");

    
    
}

function checkLogin(response) {
    if (response != "") {
        alert("login successful!")
    }
    var testQuery = document.getElementById("testQuery");
    testQuery.innerHTML = data;
}

function register() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var url = "register.php";
    var data = "uname="+username+"&pword="+password;
    ajaxRequest("POST", url, true, data, "checkLogin");
}