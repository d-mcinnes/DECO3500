<?php

session_start();
unset($_SESSION['LOGIN_STATUS']);
unset($_SESSION['USER_NAME']);
session_destroy();

header("Location: ../index.php");

?>