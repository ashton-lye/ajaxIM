<?php
    $date = $_POST['date'];

    require_once('connect.php');

    $query = "SELECT * FROM messages WHERE date = '$date'";
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