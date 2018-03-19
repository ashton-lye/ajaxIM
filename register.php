<?php
    $username = $_POST['uname'];
    $password = $_POST['pword'];

    require_once('connect.php');

    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    try {
        $query = "INSERT INTO users (username, password) VALUES ('$username', '$password')";

        $con->exec($query);
        echo "New Record Created Successfully";
    }
    catch(PDOException $e)
    {
        echo $query . "<br>" . $e->getMessage();
    }

?>