<?php
    $username = $_POST['uname'];
    $password = $_POST['pword'];

    require_once('connect.php');

    $query = "INSERT INTO users VALUES ($username, $password)";

    $result = $con->query($query);

    echo $result;
?>