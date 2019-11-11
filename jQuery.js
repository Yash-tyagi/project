$(document).ready(function(){
		$("#LclickHere").click(function(){
			$("#signup").slideDown("slow");
		});
			
		$("#SclickHere").click(function(){
			$("#signup").slideUp("fast");
		});
			
	
		$("#date").datepicker();
	
	});