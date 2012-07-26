var my_array = [];

my_array[0] = prompt('Enter a number here');
my_array[1] = prompt('Enter a second number here');
my_array[2] = prompt('Enter a third number here');

my_array[0] = parseInt(my_array[0]);
my_array[1] = parseInt(my_array[1]);
my_array[2] = parseInt(my_array[2]);

var max = Math.min(my_array[0], my_array[1], my_array[2]);
 


alert('The max number is: ' + max);