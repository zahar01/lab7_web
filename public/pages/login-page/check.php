<?php
    $login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
    $pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);


    if(mb_strlen($login) < 5 || mb_strlen($login) > 90) {
        echo "Login incorrect";
        exit();
    } else if (mb_strlen($name) < 4 || mb_strlen($name) > 50) {
        echo "Name incorrect";
        exit();
    } else if (mb_strlen($pass) < 7 || mb_strlen($pass) > 11){
        echo "Password incorrect";
        exit();
    }

    $pass = md5($pass."qwertgbmkl1234");

    $mysql = new mysqli('localhost', 'root', 'root', 'register-bd');
    $mysql->query("INSERT INTO `users` (`login`, `pass`, `name`) 
    VALUES('$login', '$pass', '$name')");

    $mysql->close();
    header('Location: /');
?>