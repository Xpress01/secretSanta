<?php 

$arr = $_POST['people_arr'];
$title = $_POST['title'];
$arr = json_decode($arr);

function emailBody($test, $title) {
    return ('<body>
    <p align="center" style="font-size: 22px; font-weight:800; padding:2em; background-color:#6e0000; color:white">Thank You For Using EZgiftEX!</p>
    <p>&nbsp;</p>
    <h1 style="text-align: center">' . $title . ' Gift Exchange</h1>
    <h1 style="text-align: center">Your person is <span style="color:#9c0302"> '. $test . '</span></h1>
    </body>'); 
}
 

/**
 * This example shows settings to use when sending via Google's Gmail servers.
 * This uses traditional id & password authentication - look at the gmail_xoauth.phps
 * example to see how to use XOAUTH2.
 * The IMAP section shows how to save this message to the 'Sent Mail' folder using IMAP commands.
 */
//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

//Create a new PHPMailer instance
$mail = new PHPMailer;
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;
//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
// use
// $mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6
//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;
//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
$mail->SMTPOptions = array(
                    'ssl' => array(
                        'verify_peer' => false,
                        'verify_peer_name' => false,
                        'allow_self_signed' => true
                    )
                );
//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = "ezgiftex@gmail.com";
//Password to use for SMTP authentication
$mail->Password = "Diablo!92501";
//Set who the message is to be sent from
$mail->setFrom('ezgiftex@gmail.com', 'EZGIFTEX');


for($i = 0; $i < count($arr); $i++) {
    //Set who the message is to be sent to
    $mail->addAddress($arr[$i]->email, $arr[$i]->name);
    //Set the subject line
    $mail->Subject = $title . ' Gift Exchange';
    //Read an HTML message body from an external file, convert referenced images to embedded,
    //convert HTML into a basic plain-text alternative body
    //$mail->msgHTML(file_get_contents('contents.html'), __DIR__);
    $mail->Body = emailBody($arr[$i]->chosenName, $title);
    //Replace the plain text body with one created manually
    $mail->AltBody = 'Your person for ' . $title . ' exchange';
    //Attach an image file
    if (!$mail->send()) {
        echo "Error" . $mail->ErrorInfo;       
        break;
    } else {
        if($i == 1) {
            echo "Sent";
        }
        //Section 2: IMAP
        //Uncomment these to save your message in the 'Sent Mail' folder.
        #if (save_mail($mail)) {
        #    echo "Message saved!";
        #}
    }
    $mail->clearAllRecipients();
    
}


?>