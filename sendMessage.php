<?php
    $sender = $_POST['sender'];
    $message = $_POST['message'];

    require_once('connect.php');

    $query = "INSERT INTO messages (sender, message) VALUES ($sender,$message)";

    $result = $con->query($query);

    $row = $result->fetch();

    echo $row['username'];
?>