//Definition 
function getText(selector){
	console.log($(selector).text().trim());	
}
function setText(selector, message){
	console.log('setting text');
	$(selector).text(message);	
}


//And many lines later someone comes along and adds a new setText function
function setText(selector){
	$(selector).text('im broken now...boo');
}

//Implementation
$(document).ready(function(){
	getText('#myDiv');
	
	setText('#myDiv', 'I am a new value');
	getText('#myDiv');
});