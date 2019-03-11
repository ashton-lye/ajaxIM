<?php
    //query to retreieve messages from the database
    $date = $_POST['date'];
    $username = $_POST['username'];

    require_once('connect.php');

    //we only want the messages from today, that are addressed to the logged in user or to everyone
    $query = "SELECT * FROM messages WHERE date = '$date' && (receiver = '$username' OR receiver = 'all' OR sender = '$username')";
    $arr = [];

    $result = $con->query($query);

    while ($row = $result->fetch()) {
        $arr[] = array (
            "id" => $row ['messageID'],
            "sender" => $row['sender'],
            "message" => $row['message'],
        );
    }

    $json = json_encode($arr);

    echo $json;
    
?>