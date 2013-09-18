<!DOCTYPE html>
<html>

<head>
<link rel="stylesheet" type="text/css" href="style.css" />
<title>DECO3500 :: Login</title>
</head>

<body>

<?php
session_start();
if(isset($_SESSION['LOGIN_STATUS']) && $_SESSION['LOGIN_STATUS'] == true) {
?>
<form name="logout" action="scripts/logout.php" method="POST">
	<?php echo $_SESSION['USER_NAME']; ?> <input type="submit" value="log out">
</form>
<?php
} else {
?>
<form name="login" action="scripts/login.php" method="POST">
	Username: <input type="text" id="username" name="username">
	Password: <input type="password" id="password" name="password">
	<input type="submit" value="Submit">
</form>
<?php
}
?>

</body>

</html>