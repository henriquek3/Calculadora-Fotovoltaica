<?php

class Connect extends \PDO
{
    private $engine = 'mysql';
    private $host = 'localhost';
    private $dbname = 'luxsolar';
    private $charset = 'utf8';
    private $user = 'root';
    private $password = '';

    public function __construct()
    {        
        $dns = $this->engine . ':host=' . $this->host . ';dbname=' . $this->dbname . ';charset=' . $this->charset;
        try{
            parent::__construct($dns,$this->user, $this->password);
        }catch (PDOException $exception){
            echo $exception->getCode();
            echo "<br/>";
            echo $exception->getMessage();
        }
    }
}