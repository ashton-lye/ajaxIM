<?php
    $sender = $_POST['sender'];
    $message = $_POST['message'];

    require_once('connect.php');

    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    try {
        $query = "INSERT INTO messages (sender, message) VALUES ('$sender', '$message')";

        $con->exec($query);
        echo "Message Sent Successfully";
    }
    catch(PDOException $e)
    {
        echo $query . "<br>" . $e->getMessage();
    }
?>