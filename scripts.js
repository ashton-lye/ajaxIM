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

//Login Functions
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var url = "login.php";
    var data = "username="+username+"&password="+password;
    ajaxRequest("POST", url, true, data, checkLogin);  
}

function checkLogin(response) {
    if (response != "") {
        loggedInUser = response;
        updateStatus("online");
        refreshMessages();
        getStatus();
        alert("Login Successful!");
    }
    else {
        alert("Login Unsuccessful - Please Check Your Details");
    }   
}

//Logout Functions
function logout() {
    var messages = document.getElementById("messageList");
    messages.innerHTML = "";
    updateStatus("offline");
    alert("Logged Out");
    loggedInUser = "";
    getStatus();
}

//Updating the Status of Users - Online & Offline
function updateStatus(status) {
    var url = "updateStatus.php";
    var data = "username="+loggedInUser+"&status="+status;
    ajaxRequest("POST", url, true, data, checkUpdate);
}

function checkUpdate(response) {
    if (response == "Status updated Successfully") {
        console.log(response);
    }
}

//Getting the Lists of Online and Offline Users
function getStatus() {
    var url = "getStatus.php";
    ajaxRequest("POST", url, true, "", displayStatus);
}

function displayStatus(response) {
    var onlineList = document.getElementById("onlineUsers");
    var offlineList = document.getElementById("offlineUsers");
    var userList = JSON.parse(response);

    var onlineListContent = "";
    var offlineListContent = "";

    for(var i = 0; i < userList.length; i++) {
        if (userList[i].status == "online") {
            onlineListContent += "<li>"+userList[i].user+"</li>";
        }
        else {
            offlineListContent += "<li>"+userList[i].user+"</li>";
        }
    }
    onlineList.innerHTML = onlineListContent;
    offlineList.innerHTML = offlineListContent;
}

//Registering a New User
function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var url = "register.php";
    var data = "uname="+username+"&pword="+password;
    ajaxRequest("POST", url, true, data, checkRegister);
}

function checkRegister(response) {
    if (response == "New Record Created Successfully") {
        alert("New User Registered Successfully - Login to Continue");
    }
    else {
        alert(response);
    }
}

//Sending Messages
function sendMessage() {
    var message = document.getElementById("messageBox").value;
    var sender = loggedInUser;
    var url = "sendMessage.php";
    var data = "sender="+sender+"&message="+message;

    if (loggedInUser != "" && message != "") {
        ajaxRequest("POST", url, true, data, checkSend);
    }
    else {
        if (loggedInUser == ""){
            alert("You must be logged in to send messages");
        }
        else {
            alert("Please type a message to send");
        } 
    }
}

function checkSend(response) {
    var message = document.getElementById("messageBox");
    if (response == "Message Sent Successfully") {
        refreshMessages();
        getStatus();
        message.value = " ";
    }
    else {
        alert(response);
    }
}

//Refreshing the Message List
function refreshMessages() {
    var url = "refreshMessages.php";
    ajaxRequest("POST", url, true, "", displayMessages);
}

function displayMessages(response) {
    var messageList = document.getElementById("messageList");
    var listContent = "";
    var messages = JSON.parse(response);

    for(var i = 0; i < messages.length; i++) {
        listContent += "<li>"+messages[i].sender+": "+messages[i].message+"</li>";
    }
    messageList.innerHTML = listContent;    
}
