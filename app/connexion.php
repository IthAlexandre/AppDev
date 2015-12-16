<?php

if(empty($_POST["login"]) || empty($_POST["password"])){
  echo "2";
  return;
}

$login = $_POST["login"];
$password = $_POST["password"];

$servername = "localhost";
$db_username = "root";
$db_password = "JeSuSo123";

// Create connection
$conn = new mysqli($servername, $db_username, $db_password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$conn->select_db("etable");

// on exécute maintenant la requete sql pour tester si les parametres de connexion sont ok
$result = $conn->query("SELECT login, password, email, id_user FROM user WHERE (login = '$login' OR email = '$login') AND password = '$password'");
$user = $result->fetch_assoc();

if(($login==$user["login"])&&($password==$user["password"]))
{
	setcookie("id",$user["id_user"]); // genere un cookie contenant l'id du membre
	setcookie("login",$login); // genere un cookie contenant le login du membre
	echo "1"; // on 'retourne' la valeur 1 au javascript si la connexion est bonne
}
else
{
	echo "0"; // on 'retourne' la valeur 0 au javascript si la connexion n'est pas bonne
}
?>
