<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styleLogin.css">
    <link rel="icon" href="Imagens/mascoteSolaitCCC.png">
    <title>Bem-vindo a SolaIT!</title>
</head>

<body>
    <div class="container">
        <div class="form-image">
            <img src="Imagens/undraw_programming_re_kg9v.svg" alt="">
        </div>
        <div class="form">
            <form action="#">
                <div class="form-header">
                    <div class="title">
                        <h1>Entrar na conta</h1>
                    </div>
                    <div class="login-button">
                        <button><a href="cadasto.html">Registrar</a></button>
                    </div>
                </div>

                <div class="input-group">

                    <div class="input-box">
                        <label for="email">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required>
                    </div>

                    <div class="input-box">
                        <label for="password">Senha</label>
                        <input id="password" type="password" name="password" placeholder="Digite sua senha" required>
                    </div>

                </div>

                <div class="continue-button">
                    <button><a href="index.html">Continuar</a> </button>
                </div>
            </form>
        </div>
    </div>
</body>

</html>