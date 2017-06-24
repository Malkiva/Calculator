$(function(){
	
    $('button').on('click', function(){
	
	var first = parseInt($("#first").val());
	var second = parseInt($("#second").val());
	
	if ($(this).attr('id')==='plus') { 
            result = first + second; 
        } else if ($(this).attr('id')==='multiply'){ 
            result = first * second; 
        } else if ($(this).attr('id')==='minus'){ 
            result = first - second; 
        } else if ($(this).attr('id')==='delenie'){ 
            result = first / second;
        }
		
        $("#result").val(result);
    })
	
	
    
})
