<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

    require_once('connect.php');

    $query = "SELECT * FROM users WHERE username = '$username' && password = '$password'";

    $result = $con->query($query);

    $row = $result->fetch();

    echo $row['username'];
?>