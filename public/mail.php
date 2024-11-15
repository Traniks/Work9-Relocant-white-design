<?php
$to = "sales@relocant.ae"; // email получателя
$tema = "Заявка"; // тема письма

$message = "Имя: " . $_POST['username'] . "<br>"; // полученное из формы name=username
$message .= "Телефон: " . $_POST['usertel'] . "<br>"; // полученное из формы name=usertel

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

if (mail($to, $tema, $message, $headers)) {
    
    echo json_encode(['success' => true]);
} else {
    
    echo json_encode(['success' => false, 'message' => 'Ошибка при отправке почты.']);
}

exit; 
?>
