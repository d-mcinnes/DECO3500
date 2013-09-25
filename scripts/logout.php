<?php

session_start();
unset($_SESSION['LOGIN_STATUS']);
unset($_SESSION['USER_NAME']);
unset($_SESSION['POINTS']);
session_destroy();

header("Location: ../index.php");

?>