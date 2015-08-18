<?php

$email = $_POST['email'];
$password = $_POST['password'];

if ($email&&$password){
	include 'mysql_connect.php';
	$query = mysql_query("SELECT * FROM users WHERE username='$email");

	$numrows = mysql_num_rows($query);
	echo $numrows;
}
?>