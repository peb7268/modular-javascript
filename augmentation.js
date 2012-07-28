/*** A Better way with the module pattern ******************************************************************************#/
* Our goals:
*
* 1) We define a module and scope it within a self invoking anonymous function
* 2) We perform a global import (by passing jQuery in as a param) and namespace it so we circumvent naming collisions
* 3) We then export the module with the return keyword
************************************************************************************************************************/

var jQuery = (function($){
	//private vars 
	$.someNewProperty = 'booyah';
		
	//New Super Duper Method
	$.superDuperMethod = function(message){
		console.log('Im a new super duper method that says: ' + message);
	}

	return $;
})(jQuery);


//Implementation
$(document).ready(function(){
	$.superDuperMethod('Whhhaaasssssuuuppppp!!!');
});