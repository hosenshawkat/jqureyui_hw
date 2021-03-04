$(document).ready(function(){

// alert("welcome");                                                                                                        

 $('#btnc').click(function(){	
alert("Hello SSB")
});

});




$(document).ready(function(){

// hide
 $('#hide').click(function(){	
$('h2').hide("slow");
});

// show
 $('#show').click(function(){	
$('h2').show("fast");
});

// toggle
 $('#toggle').click(function(){	
$('h2').toggle(2000);
});

// fadeOut
 $('#fadeOut').click(function(){	
$('h2').fadeOut(2000);
});

// fadeIn
 $('#fadeIn').click(function(){	
$('h2').fadeIn(2000);
});

// fadeToggle
 $('#fadeToggle').click(function(){	
$('h2').fadeToggle(2000);
});

// fadeTo
 $('#fadeTo').click(function(){	
$('h2').fadeTo(1000, 0.5);
});


});



$(document).ready(function(){   

 $('.panel').click(function(){	
$('.content').slideToggle(1000);

});
});


$(document).ready(function(){  

$( "#draggable" ).draggable();

});



$(document).ready(function(){  

$( "#accordion" ).accordion();

});


$(document).ready(function(){ 

$( "#tags" ).autocomplete({
      source: availableTags
    });

 });


$(document).ready(function(){ 
$( "#datepicker" ).datepicker();
 });
