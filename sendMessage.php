<?php
    $sender = $_POST['sender'];
    $message = $_POST['message'];
    $date = $_POST['date'];

    require_once('connect.php');

    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    try {
        $query = "INSERT INTO messages (sender, message, date) VALUES ('$sender', '$message', '$date')";

        $con->exec($query);
        echo "Message Sent Successfully";
    }
    catch(PDOException $e)
    {
        echo $query . "<br>" . $e->getMessage();
    }
?>