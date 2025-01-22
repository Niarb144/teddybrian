<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

if(isset($_POST['email'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $body = $_POST['message'];

    require 'vendor/autoload.php';

    $mail = new PHPMailer();

    //smtp settings
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "teddybrian543@gmail.com"; //enter your email here. This email will be used to send the emails within your site
    $mail->Password = "xxxx xxxx xxxx xxxx"; //google 16 digit authentication code
    $mail->Port = 465;
    $mail->SMTPSecure = "ssl";

    //email settings
    $mail->isHTML(true);
    $mail->setFrom($email, $name);
    $mail->addAddress("niarbyddet@mail.com"); //the mail that receives the incoming messages
    // $mail->addCC("anyccmail@mail.com"); //add a cc email if needed
    $mail->Subject = ("$subject");
    $mail->Body = $body;

    if($mail->send()){
        $status = "success";
        echo "<script>alert ('Email sent successfully');
        window.location.href= '/#contacts';</script>";
    }
    else
    {
        $status = "failed";
        echo "<Script>
        alert ('Email not sent');
        window.location.href= 'index.html';
        </Script>";
    }

    exit(
        json_encode(array("status" => $status, "response" => $response))
    );
}

?>
