$(document).ready(function(){
	$('input').keypress(function(e){
		if(e.which == 13){
			e.preventDefault();
				var name = $('#name').val();
				var phone = $('#phone').val();
				var email = $('#email').val();
				var image = $('#image').val();
				
				addContact(name,phone,email,image);
				
				
		}; 
	});

	var addContact = function(name,phone,email,image){
		var newContact = "<li>" + name + " " + phone + " " + email + "<span class = 'edit'>edit</span>" + "<span class = 'delete'>delete?</span></li>" + "<img src=" + image + ">" 
	  $(newContact).appendTo('ul');
	};
$('ul').on('click', '.delete', function(){
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
    });
  });
$('ul').on('click', '.edit', function(){

	$('#edname').val($('#name').val());
	$('#edphone').val($('#phone').val());
	$('#edemail').val($('#email').val());
	$('#edimage').val($('#image').val());
});
});