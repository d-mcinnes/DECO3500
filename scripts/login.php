<?php

session_start();
if(isset($_POST['username']) && isset($_POST['password'])) {
	$username = $_POST['username'];
	$password = $_POST['password'];
	$_SESSION['LOGIN_STATUS'] = true;
	$_SESSION['USER_NAME'] = $username;
}

header("Location: ../index.php");

?>