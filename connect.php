<?php
	//db connection script
    try{
			$con = new PDO('mysql:host=localhost;dbname=comp333-assn1-im','root','root');
   	} catch (PDOException $e) {
   		echo "Database connection error " . $e->getMessage();
   	}
?>