function sofikul(){
	
	var allchar ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&**%$#@!)(&^%$#@@!%#^%$&*&|,.,.,";
	var gnapss="";
	
	for(var a = 0; a<15; a++){
		
		var gn = Math.floor(Math.random() * allchar.length);
		
	    gnapss += allchar. substring(gn,gn+1);
		
		
	}
	
	document.querySelector("#gnaretorpass").value=gnapss;
}