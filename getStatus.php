<?php
    $status = $_POST['status'];

    require_once('connect.php');

    $query = "SELECT username, status FROM users";

    $result = $con->query($query);

    $row = $result->fetch();

    while ($row = $result->fetch()) {
        $arr[] = array (
            "user" => $row['username'],
            "status" => $row['status'],
        );
    }

    $json = json_encode($arr);

    echo $json;
?>