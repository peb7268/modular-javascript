/*** A Better way with the module pattern ******************************************************************************#/
* Our goals:
*
* 1) We define a module and scope it within a self invoking anonymous function
* 2) We perform a global import (by passing jQuery in as a param) and namespace it so we circumvent naming collisions
* 3) We then export the module with the return keyword
************************************************************************************************************************/

var MODULE = (function($){
	//private vars 
	var secretText ="shhh dont tell... im a secret", 
		myBankAccountNumber = 12345,
		mod = {};

	//privateMethods
	makeAWithdrawl = function(myBankAccountNumber){
		console.log('Your Bank account number is: ' + myBankAccountNumber + ' and youre broke chump');
	}

	//Public methods
	mod.getText = function(selector){
				console.log($(selector).text().trim());	
	}
	mod.setText = function(selector, message){
				console.log('setting text');
				$(selector).text(message);	
	}
	mod.ripYouOff = function(myBankAccountNumber){
		console.log('Your Bank account number is: ' + myBankAccountNumber + ' and youre broke chump');
	}

	return mod;
})(jQuery);

//And many lines later someone comes along and adds a new setText function
function setText(selector){
	$(selector).text('im broken now...boo');
}	


//Implementation
$(document).ready(function(){
	setText('#myDiv');
	MODULE.setText('#myDiv','I am some text to be set');
});