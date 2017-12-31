
		<?php

			ini_set('display_errors', 1);
			ini_set('display_startup_errors', 1);
			error_reporting(E_ALL);
			
			$oCon = mysqli_connect('localhost', 'root', '','SITE');
			$cSQL = "INSERT INTO CLIENTE (NOME, EMAIL, USUARIO, SENHA) VALUES ('$_POST[nome]', '$_POST[email]', '$_POST[usuario]', '$_POST[senha]')";
			
			
			
		?>
