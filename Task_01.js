'use strict'

function makeBuffer()
{
	let string = ''
	
	return {
		getNext : function() {
			string++
		},
		
		add : function(value) {
			string = string + '' + value
		},
		
		print : function(){
			return string
		},
		
		clear : function(){
			string = ''
		}
	}
}


let buffer = makeBuffer();

buffer.add( 'JavaScript ');
buffer.add( 'learn ');
buffer.add( 'need to! ');
console.log(buffer.print());

buffer.add(0);
buffer.add(1);
buffer.add(0);
console.log (buffer.print()); 

buffer.add(" Test ");
buffer.add("will not eat you!");
console.log((buffer.print())); 
buffer.clear ();
console.log( (buffer.print())); 