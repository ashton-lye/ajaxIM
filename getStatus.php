<?php
    $status = $_POST['status'];

    require_once('connect.php');

    $query = "SELECT * FROM users WHERE status = '$status'";

    $result = $con->query($query);

    $row = $result->fetch();

    while ($row = $result->fetch()) {
        $arr[] = array (
            "user" => $row ['username'],
        );
    }

    $json = json_encode($arr);

    echo $json;
?>