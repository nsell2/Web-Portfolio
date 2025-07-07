<?php 

    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = "Web Portfolio Contact Form Submission";
    $message = $_POST["message"];

    require "vendor/autoload.php";
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
?>

