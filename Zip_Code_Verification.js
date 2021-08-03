
		

function verifyZipCode(){
	
	var zipCode = document.getElementById('zip').value;

	if(zipCode >= 35801 && zipCode <= 35816){
		alert("correct");
		return zipCode
	}else{
		alert("Invalid zipCode. Please try again.");
	}

	
}