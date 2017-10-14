<?php
/**
 * Created by PhpStorm.
 * User: jeanfreitas
 * Date: 06/08/17
 * Time: 12:24
 */

//$conn = new PDO('mysql:host=localhost;dbname=luxsolar;charset=utf8', 'root', '84089554');
$conn = new PDO('mysql:host=localhost;dbname=luxsolar;charset=utf8', 'root', '');

$stmt = $conn->prepare("SELECT * FROM estados WHERE ativo = 'S' ORDER BY nome");
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);
