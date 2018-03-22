<?php

    require_once('connect.php');

    $query = "SELECT username, status FROM users";
    $arr = [];

    $result = $con->query($query);

    while ($row = $result->fetch()) {
        $arr[] = array (
            "user" => $row['username'],
            "status" => $row['status'],
        );
    }

    $json = json_encode($arr);

    echo $json;
?>