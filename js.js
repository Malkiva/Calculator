$(function(){
	
$('button').on('click', function(){
	
	var first , second , result ;
	
	first = $("#first").val();
	second = $("#second").val();
    
	first = parseInt(first);
    second = parseInt(second);	
	if ($(this).attr('id')=='plus') { 
     result = first + second; 
    }
    else if ($(this).attr('id')=='multiply'){ 
     result = first * second; 
    }
    else if ($(this).attr('id')=='minus'){ 
     result = first - second; 
    }
    else if ($(this).attr('id')=='delenie'){ 
     result = first / second;
    }
		
 $("#result").val(result);
})
	
	
    
})
