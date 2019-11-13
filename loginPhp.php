<?php
   $username = $_POST['username'];
   $password = $_POST['password'];


   $con = mysqli_connect("localhost","root","");
   if(!$con){

   	die("could not connect".mysql_error());
   }
   mysqli_select_db($con,"signup_database");
   $result = mysqli_query($con,"Select * From signup_form Where name='$username' AND password='$password'"); 
   $row = mysqli_fetch_array($result);
   if($row)
   {
   
      header('Location: Home.html');
     
    }
    else{
    	$msg ="wrong details entered";
    	header("Location: login.html?msg=".$msg);
    	die ("hey u enterd the wrong details please enter the correct details or create a new account!!!!");
    }
   
  mysqli_close($con);
    ?>

