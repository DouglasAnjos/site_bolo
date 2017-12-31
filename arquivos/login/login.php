<?php

session_start();


$login = $_POST['login'];
$senha = md5($_POST['senha']);

$oCon = mysqli_connect('localhost', 'root', '', 'SITE') or die (mysqli_error());

$selecao = mysqli_query($oCon, "SELECT * FROM CLIENTE WHERE USUARIO= '$login' AND SENHA = '$senha' ");


if (mysqli_num_rows($selecao) > 0){
	$_SESSION['login'] = '$login';
	$_SESSION['senha'] = '$senha';
	echo "Bem-Vindo " .$login;

}else{
	unset($_SESSION['login']);
	unset($_SESSION['senha']);
	//header('location:../login.html');
	echo "<script> alert ('Usuario ou Senha Incorretos!'); document.location.href='../login.html' </script>";
}


/*		TESTE
$query = mysqli_query($oCon, $selecao);

if ($query != 0) {
	echo "<script> alert ('Com Sucesso')</script>";
}else{
	echo "ERRO!!!";
}
*/



?>