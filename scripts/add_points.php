<?php

session_start();

if(isset($_POST['amount'])) {
	$amount = $_POST['amount'];
	if($amount > 0) {
		if(isset($_SESSION['POINTS'])) {
			$_SESSION['POINTS'] += $amount;
		} else {
			$_SESSION['POINTS'] = $amount;
		}
	}
}

header("Location: ../index.php");

?>