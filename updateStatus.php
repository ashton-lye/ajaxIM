<?php
    $username = $_POST['username'];
    $status = $_POST['status'];

    require_once('connect.php');

    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    try {
        $query = "UPDATE users SET status='$status' WHERE username=$username";

        $con->exec($query);
        echo "Message Sent Successfully";
    }
    catch(PDOException $e)
    {
        echo $query . "<br>" . $e->getMessage();
    }
?>