<?php
   $name = $_POST['name'];
   $email = $_POST['email'];
   $password = $_POST['password'];
   $dob = $_POST['date'];
   $address =$_POST['address'];

   $con = mysqli_connect("localhost","root","");
   if(!$con){

   	die("could not connect".mysql_error());
   }
   mysqli_select_db($con,"signup_database");
   mysqli_query($con,"INSERT Into signup_form(name,email,password,dob,address)
                          Values ('$name','$email','$password','$dob','$address')"); 
   // if ($con->query($result)== TRUE){
   //    echo "New record is inserted sucessfully";
   //  }
  mysqli_close($con);
    ?>

 