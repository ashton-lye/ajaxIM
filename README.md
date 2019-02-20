# ajaxInstantMessage

This project is a simple instant-messaging service using AJAX, PHP and a MySQL database. AJAX requests are used to send and receive messages to and from the database, and Javascript is used to refresh the page content without having to refresh the whole page.
A list of online and offline users are displayed either side of the main message window. Users have to login to send and view messages and are also able to register new accounts.  

The page's content - messages and online/offline users - is refreshed every 5 seconds or whenever the user sends a message. The message window only shows messages from the current day.  

Users are also able to send messages that will only be visible to a specific user by typing an @ symbol at the beginning of the message followed by the username of the user they want to send the message to. For example, if "@xyz hello!" is entered into the message box, it will only be visible to the user xyz. If no user is specified, the message will be visible to everyone.  

This project requires the MySQL database to be hosted on a web server - during development I used MAMP on my local machine. The connection string in connect.php will need to be changed to match the address of the database.  

This project was originally completed as an assignment for the Web Applications Development paper I studied during my third year of study. I earned an A+ for the assignment and the paper overall.
