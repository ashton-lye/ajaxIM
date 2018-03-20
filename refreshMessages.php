<?php
    require_once('connect.php');

    $query = "SELECT * FROM messages";
    $arr = [];

    $result = $con->query($query);

    $row = $result->fetch();

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