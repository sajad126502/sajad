<?php


    $myname=$_POST['name'];
    $myemail=$_POST['email'];
    $mymassage=$_POST['massage'];
    
    

// Connecting to the Database
$servername = "localhost";
$username = "root";
$pass = "";
$database="myf";

// Create a connection
$conn = mysqli_connect($servername, $username, $pass,$database);

// Die if connection was not successful
if (!$conn){
    die("Sorry we failed to connect: ". mysqli_connect_error());
}
else{
    echo "Connection was successful<br>";
}

// Create a db
$sql = "INSERT INTO developer(name,email,massage) values('$myname','$myemail','$mymassage')";
$result = mysqli_query($conn, $sql);


?>
