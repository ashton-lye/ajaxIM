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
        refreshMessages();
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

function checkUpdate(response) {
    if (response == "Status updated Successfully") {
        alert(response);
    }
}

function getStatus() {
    var url = "getStatus.php"
    ajaxRequest("POST", url, true, "", displayStatus);
}

function displayStatus() {
    var onlineList = document.getElementById("onlineUsers");
    var offlineList = document.getElementById("offlineUsers");
    var userList = JSON.parse(response);

    var onlineListContent = "";
    var offlineListContent = "";

    for(var i = 0; i < userList.length; i++) {
        if (userList[i].status == "online") {
            onlineListContent += "<li>"+userList[i].username+"</li>";
        }
        else {
            offlineListContent += "<li>"+userList[i].username+"</li>";
        }
    }
    onlineList.innerHTML = onlineListContent;
    offlineList.innerHTML = offlineListContent;
}

/*function displayOnline(response) {
    var onlineList = document.getElementById("onlineUsers");
    var onlineUsers = JSON.parse(response);

    for(var i = 0; i < onlineUsers.length; i++) {
        listContent += "<li>"+onlineUsers[i]+"</li>";
    }
    onlineList.innerHTML = listContent;

}

function displayOffline(response) {
    var offlineList = document.getElementById("offlineUsers");
    var offlineUsers = JSON.parse(response);

    for(var i = 0; i < offlineUsers.length; i++) {
        listContent += "<li>"+offlineUsers[i]+"</li>";
    }
    offlineList.innerHTML = listContent;
}*/

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
    var message = document.getElementById("messageBox").value;
    var sender = loggedInUser;
    var url = "sendMessage.php";
    var data = "sender="+sender+"&message="+message;

    var testSend = document.getElementById("testSend");
    testSend.innerHTML = sender + data;

    if (loggedInUser != "" && message != "") {
        ajaxRequest("POST", url, true, data, checkSend);
    }
    else {
        if (loggedInUser == ""){
            alert("You must be logged in to send messages");
        }
        else {
            alert("Please type a message to send")
        }
        
    }
}

function checkSend(response) {
    if (response == "Message Sent Successfully") {
        refreshMessages();
        alert(response);
    }
    else {
        alert(response);
    }
}

function refreshMessages() {
    var url = "refreshMessages.php";
    ajaxRequest("POST", url, true, "", checkRefresh)
}

function checkRefresh(response) {
    var tester = document.getElementById("testRefresh");
    var messageList = document.getElementById("messageList");
    var listContent = "";
    var messages = JSON.parse(response);

    for(var i = 0; i < messages.length; i++) {
        listContent += "<li>"+messages[i].sender+": "+messages[i].message+"</li>";
    }
    messageList.innerHTML = listContent;    
}