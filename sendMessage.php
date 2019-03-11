<?php
    //query for sending a message - inserting into db
    $sender = $_POST['sender'];
    $message = $_POST['message'];
    $date = $_POST['date'];
    $receiver = $_POST['receiver'];

    require_once('connect.php');

    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    try {
        $query = "INSERT INTO messages (sender, message, date, receiver) VALUES ('$sender', '$message', '$date', '$receiver')";

        $con->exec($query);
        echo "Message Sent Successfully";
    }
    catch(PDOException $e)
    {
        echo $query . "<br>" . $e->getMessage();
    }
?>