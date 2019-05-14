<?php
    include "dbconn.php"
    $uname=$_REQUEST["uname"];
    $pwd=$_REQUEST["pwd"];
    $sql="select * from login where uname='$uname' and pwd='$pwd'";
    $result=$dbconn->query($sql);
    if($result->num_rows==1){
        echo "验证通过";
    }else{
        echo "验证失败"
    }
    $dbconn->close();
?>