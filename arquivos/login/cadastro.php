<!DOCTYPE html>
<html>
<head>
<?php
session_start();

error_reporting(E_ALL);
ini_set('display_errors', '1');

$nome = $_POST['nome'];
$email = $_POST['email'];
$usuario = $_POST['usuario'];
$senha = md5($_POST['senha1']);

$oCon = mysqli_connect('localhost', 'root', '', 'SITE');

//VERIFICAR SE ALGUM CAMPO EXISTE

$pesquisa = mysqli_query($oCon, "SELECT USUARIO FROM CLIENTE WHERE USUARIO = '$usuario'");

$pesquisa2 = mysqli_query($oCon, "SELECT EMAIL FROM CLIENTE WHERE EMAIL = '$email'");
//$consulta = ($pesquisa);
$erro1 = mysqli_num_rows($pesquisa);
$erro2 = mysqli_num_rows($pesquisa2);

if ($erro1 > 0){
	echo "<script> alert('FAVOR INFORMAR OUTRO USUARIO!'); document.location.href='../login.html' </script>";
	
	}if ($erro2 > 0){
	echo "<script> alert('FAVOR INFORMAR OUTRO E-MAIL!'); document.location.href='../login.html' </script>";

	}
	//if (($erro1 > 0)  && ($erro2 > 0)){	echo "<script>(FAVOR INFORMAR OUTRO USUARIO E OUTRA SENHA!); document.location.href='../login.html'</script>";}
		else{
	$cSQL = "INSERT INTO CLIENTE (NOME, EMAIL, USUARIO, SENHA) VALUES ('$nome', '$email', '$usuario' , "."'$senha' )";
}if (mysqli_query($oCon, $cSQL)){
	echo "<script> alert ('Cadastro Realizado Com Sucesso !!'); document.location.href='../login.html' </script>" ;
}else{
	echo "ERRO !!!";
}


/*
if ($usu > 0){
	echo "<script> alert('FAVOR INFORMAR OUTRO USUARIO!'); document.location.href='../login.html' </script>";
}else{
	$cSQL = "INSERT INTO CLIENTE (NOME, EMAIL, USUARIO, SENHA) VALUES ('$nome', '$email', '$usuario' , "."'$senha' )";
}if (mysqli_query($oCon, $cSQL)){
			echo "<script> alert ('Com Sucesso !!'); document.location.href='../login.html' </script>" ;
			}else{
				echo "ERRO !!!";
			}
*/


?>
		
</head>
<body>


</body>
</html>