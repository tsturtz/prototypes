<!-- Session Reader -->
<?php
session_start();
?>
<pre>
<?php
print_r($_GET);
$_SESSION['name'] = $_GET['name'];
$_SESSION['age'] = $_GET['age'];
$_SESSION['work'] = $_GET['work'];
//print_r($_SESSION);
//session_destroy();
?>
</pre>