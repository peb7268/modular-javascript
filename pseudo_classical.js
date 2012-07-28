/*** Class Creation ****************************************************************************************************#/
*
*	When using the "new" keyword the context changes from global to a new and empty context specific to that instance.
*	Therefor "this" refers to that specific instance.
* 	If nothing is explicitly returned from the constructor function then "this" - the current context, is returned.
*
************************************************************************************************************************/



//Pseudo Classical Inheritance (class is a reserved keyword)
//Definition
var Class = function(){
	var klass = function(){
		this.init.apply(this, arguments)
	};
	
	klass.prototype.init = function(){};
	return klass;
};

//Implementation
var Person = new Class;

Person.prototype.init = function(){
	//Called during person instantiation
}