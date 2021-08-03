var key = "6183870967cfc58fd7a94907974f4ddb";
var countryCode =  "us";//"ISO 3166-2:US";
var zip = 85016;


//api.openweathermap.org/data/2.5/forecast/daily?zip={zip code},{country code}&appid={API key}



document.addEventListener('DOMContentLoaded', bindButtons);


function bindButtons(){
	document.getElementById('zipCodeSubmit').addEventListener('click', function(event){
    	var req = new XMLHttpRequest();
    	var payload = {zipName: null };
    	payload.zipName = document.getElementById('zipCode').value;
    	//payload.zipName = zip;
    	req.open("GET", "http://api.openweathermap.org/data/2.5/forecast/daily?zip=" + payload.zipName  +"," + countryCode +  "&appid=" + key, true);
    	alert("here");
    	req.addEventListener('load',function(){
    		alert("here");
      		if(req.status >= 200 && req.status < 400){
      			alert("ahhhhh");
		        var response = JSON.parse(req.responseText);
		        document.getElementById('zipInfo').textContent = response.city;
		        document.getElementById('printZip').textContent = response.cod;
      } else {
        console.log("Error in network request: " + req.statusText);
      }});
    req.send(null);
    event.preventDefault();
  })


}