<?php
    $login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
    $pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);
    
    
    $pass = md5($pass."qwertgbmkl1234");
    
    $mysql = new mysqli('localhost', 'root', 'root', 'register-bd');
    
    $result = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login' AND `pass` = '$pass'");
    
    $user = $result->fetch_assoc();
    if(count($user) == 0){
        echo "User undefined";
        exit();
    }

    setcookie('user', $user['name'], time() + 3600*24*7, "/");

    $mysql->close();
    if($user['access'] == "admin"){
        header('Location: ../adminPanel/admin.html');
    } else {
        header('Location: login.php');
    }
?>