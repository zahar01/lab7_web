<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/pages/login-page/login__style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
    <title>Brilliant Store</title>
</head>

<body>
    <div class="container mt-4">
        <?php
            if($_COOKIE['user'] == 0):
        ?>
        <div class="row">
            <div class="col">
                <h1>Registration</h1>
                <form action="check.php" method="post">
                    <input type="text" class="form-control" name="login" id="login" placeholder="Enter login..."><br>
                    <input type="text" class="form-control" name="name" id="name" placeholder="Enter your name..."><br>
                    <input type="password" class="form-control" name="pass" id="pass" placeholder="Enter password..."><br>
                    <button class="btn btn-success" type="submit">Register</button>
                </form>
            </div>
            <div class="col">
                <h1>Login</h1>
                <form action="auth.php" method="post">
                    <input type="text" class="form-control" name="login" id="login" placeholder="Enter login..."><br>
                    <input type="password" class="form-control" name="pass" id="pass" placeholder="Enter password..."><br>
                    <button class="btn btn-success" type="submit">Login</button>
                </form>
            </div>
        </div>
        
        <?php else: ?>
            <p>Helo <?=$_COOKIE['user']?>. To open admin panel press <a href="redirect.php">Here</a></p>
        <?php endif; ?>
    </div>
</body>

<script src="./script/load.js"></script>
</html>
