<?php
// include('amocrm/lead.php');
include('amocrm/lead.php');

$to = "sales@relocant.ae"; // емайл получателя данных из формы
$tema = "Заявка"; // тема полученного емайла

$message .= "Имя: " . $_POST['username'] . "<br>"; // полученное из формы name=username
$message .= "Телефон: " . $_POST['usertel'] . "<br>"; // полученное из формы name=usertel

// $message .= "Соц.Сеть: " . $_POST['type'] . "<br>";
// $message .= "Соц.Сеть: " . $_POST['type'] . "<br>";
// $message .= "Время: " . $_POST['date'] . "<br>";

$headers = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента

mail($to, $tema, $message, $headers); // отправляет получателю на емайл значения переменных
header('Location: /');
if (isset($_POST['submitform']))
    
?>
<script type="text/javascript">
</script>   
