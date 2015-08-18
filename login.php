<?php

$email = $_POST['email'];
$password = $_POST['password'];

if ($email&&$password)
{
	include 'mysql_connect.php';
	$query = mysql_query("SELECT * FROM users WHERE email = '$email'");
	$numrows= mysql_num_rows($query);
	if($numrows!= 0){
		//code login
		while($row = mysql_fetch_assoc($query))
		{
			$dbemail = $row['email'];
			$dbpassword = $row['password'];
		}
		// check to see if they mathc!
		if($email == $dbemail&&$password==$dbpassword)
		{
			//show login 
			echo "login in";
			header('Location: interface.html');
		}
		else
			echo "Incorrect password!";
	}
	else
		die("That user doesn't exist!");
}

else
	die("please enter password");