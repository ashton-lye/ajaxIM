var loggedInUser = "";

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
    var url = "login.php";
    var data = "uname="+username+"&pword="+password;
    ajaxRequest("POST", url, true, data, checkLogin);  
}

function checkLogin(response) {
    var testQuery = document.getElementById("testQuery");
    if (response != "") {
        loggedInUser = response;
        testQuery.innerHTML = loggedInUser;
        updateStatus("online");
        alert("Login Successful!");
    }
    else {
        alert("Login Unsuccessful - Please Check Your Details");
    }
    
}

function updateStatus(status) {
    var url = "updateStatus.php";
    var data = "username="+loggedInUser+"&status="+status;
    ajaxRequest("POST", url, true, data, checkUpdate);
}

function register() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var url = "register.php";
    var data = "uname="+username+"&pword="+password;
    ajaxRequest("POST", url, true, data, checkRegister);
}

function checkRegister(response) {
    var testQuery = document.getElementById("testQuery");
    testQuery.innerHTML = response;
    if (response == "New User Added Successfully!") {
        //loggedInUser == 
        alert(response)
    }
    else {
        alert(response)
    }
}

function sendMessage() {
    var message = document.getElementById("messageBox").value
    var sender = loggedInUser;
    var url = "sendMessage.php";
    var data = "sender="+sender+"&message"+message;

    var testSend = document.getElementById("testSend");
    testSend.innerHTML = sender + data;

    if (loggedInUser != "") {
        ajaxRequest("POST", url, true, data, checkSend);
    }
    else {
        alert("You must be logged in to send messages");
    }
}

function checkSend() {
    if (response == "Message Sent Successfully") {
        alert(response);
    }
    else {
        alert(response);
    }
}