<?php

require 'Connect.php';

class LuxSolarApp
{                
    public function run($argument)
    {
        # code...
        if ($argument === 'estados') {
            # code...
            echo "run";
            $pdo = new Connect();
            $stmt = $pdo->prepare("SELECT * FROM estados WHERE ativo ='S' ");
            $stmt->execute();            
            echo "<br/>";
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            print_r($result);
            foreach ($result as $item) {
                echo '<option value="' . $item['uf_nome'] . '">' . $item['nome'] . '</option>';
            }
        } else {
            echo "not run";
        }
    }
}

$url = $_SERVER['QUERY_STRING'];
$folder = explode('/', $url);
print_r($folder);
echo "<br/>";

if (isset($folder[3])) {
    # code...
    $command = $folder[3];
    echo $command;
}