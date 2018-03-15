<?php
    $username = $_POST['uname'];
    $password = $_POST['pword'];

    require_once('connect.php');

    $query = "INSERT INTO users VALUES ($username, $password)";

    if ($con->query($query) === TRUE) {
        echo "New User Added Successfully!";
    }
    else {
        echo "borked" .$con->error;
    }


?>