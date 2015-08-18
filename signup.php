<?php
	include 'mysql_connect.php';
	$username = $_POST['username'];
	$email = $_POST['email'];
	$password = $_POST['password'];

	if(!$_POST['submit']){
		echo "please fill out the form";
		
	} else {
		mysql_query("INSERT INTO users(`id`,`username`,`email`,`password`)
			VALUES(NULL,'$username','$email','$password')") or die('fail to insert');
		echo "User has been added";
		header('Location: interface.html');
		
	}
?>
