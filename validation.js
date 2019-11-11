//form validation using javascript
function validation(){
	//$(".error").remove(); 
	var nameRegex=/^[A-Za-z ]{3,}$/
	var emailRegex= /^[A-Za-z0-9._ ]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/
	var passwordRegex=/^[A-Za-z0-9@._ ]+$/
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var password=document.getElementById("password").value;
	var date=document.getElementById("date").value;
	var address=document.getElementById("address").value;
	if(!nameRegex.test(name)){
		document.getElementById("name-error").innerHTML="**no valid name";
		return false;
	}else{
		document.getElementById("name-error").innerHTML="";
	}

	if(!emailRegex.test(email)){
		document.getElementById("email-error").innerHTML="email wrong format";
		return false;
	}else{
		document.getElementById("email-error").innerHTML="";
	}

	if(!passwordRegex.test(password)){
		document.getElementById("password-error").innerHTML="**try a cool password man";
		return false;
	}else{
		document.getElementById("password-error").innerHTML="";
	}
	if (date.length<1) {
		document.getElementById("date-error").innerHTML="**field is mandatory";
		return false;
	}else{
		document.getElementById("date-error").innerHTML="";
	}
	if(address.length<5){
		document.getElementById("address-error").innerHTML="**field is mandatory";
		return false;
	}else{
		document.getElementById("address-error").innerHTML="";
	}
	
}