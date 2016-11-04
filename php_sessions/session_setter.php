<!-- Session Setter -->
<?php
session_start();
?>
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Session Setter</title>
</head>
<body>

<form method="get" action="session_reader.php">

    <input name="name" placeholder="Name"
           value="<?= $name = isset($_SESSION['name']) ? $_SESSION['name'] : '' ?>">

    <input name="age" placeholder="Age"
           value="<?= $age = isset($_SESSION['age']) ? $_SESSION['age'] : '' ?>">

    <input name="work" placeholder="Occupation"
           value="<?= $work = isset($_SESSION['work']) ? $_SESSION['work'] : '' ?>">

    <button type="submit">Submit</button>
</form>
<pre>
<?php
print_r($_SESSION);
?>
</pre>
</body>
</html>