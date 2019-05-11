<?php
 header("content-type:text/html;charset=utf-8");
 include "dbconn.php";
$cid=$_REQUEST["cid"];
$sql="select * from bestdetails where cid='$cid'";
$result=$conn->query($sql);
if($result->num_rows>0){
    while($row=mysqli_fetch_assoc($result)){       
        $arr[]=$row;
    }
    echo json_encode($arr);
}else{
    echo("数据不存在");
}
 $conn->close();
?>