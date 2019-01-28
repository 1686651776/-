<?php

      header("Content-Type: text/html;charset=utf-8");
      #登陆;
      
      # 1. 获取数据;

      $username = $_POST["username"];
      $email = $_POST["email"];
      $password = $_POST["password"];
      

      if(!$username || !$password || !$email){
            die('{"state":"error","errorType":"参数不全","stateCode":"3"}');
      }

      # 2. 验证数据是否存在;

      # 2.1 链接数据库;

      require("connect.php");

      $select_query = "SELECT * FROM user";

      $select_res = mysql_query($select_query);

      while($row = mysql_fetch_array($select_res)){
            // 有没有该帐号;
            if($row["username"] === $username || $row["email"] === $email){
                  // 判定密码是否正确;
                  if($row["password"] === md5($password)){
                        die('{"state":"success","errorType":"登录成功","stateCode":"1"}');
                  } else {
                        die('{"state":"success","errorType":"密码错误","stateCode":"2"}');
                  }
            } else {
                  die('{"state":"success","errorType":"没用该帐号","stateCode":"2"}');
            }
      }
      

?>