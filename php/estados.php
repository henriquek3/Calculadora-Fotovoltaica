<?php
/**
 * Created by PhpStorm.
 * User: jeanfreitas
 * Date: 06/08/17
 * Time: 12:24
 */

$conn = new PDO('mysql:host=localhost;dbname=luxsolar;charset=utf8', 'root', '84089554');

$stmt = $conn->prepare('SELECT * FROM estados');
$stmt->execute();
$result = $stmt->fetch();

foreach ($stmt as $item) {
    echo '<option value="' . $item['uf_nome'] . '">' . $item['nome'] . '</option>';
}