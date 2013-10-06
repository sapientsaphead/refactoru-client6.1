$(document).ready(function() {


	//HTML RENDERING
    var insertProfile = function(){
    	Boolean(myName) === false ? "" : $('.display-profile').append('<div class="braindead"><p class="pname"><span class="text-info">My Name Is: </span>'+ myName 
            + '</p></div><div class="braindead"><p class="pbio"><span class="text-info">Brief Bio </span></br>' 
    		+ myBio + '</p></div><div class="braindead"><p class="pfavebooks"><span class="text-info">My Favorite Books: </span></br>' 
            + myFaveBooks + '</p></div><div class="braindead"><p class="pfavejslibs"><span class=text-info>My Favorite Javascript Libraries: </span></br>' 
            + myFaveJSLibs + '</p></div>');
   	}

	//EVENT HANDLERS


    $('.add-profile').on('click', function() {
    	$('.profile-form').toggle(function (){
    		$('.profile-form').addClass("active");
    		$('.profile-form').removeClass("active");
    	}); 
    });

    var myName;
    var myBio;
    var myFaveBooks;
    var myFaveJSLibs;

    $('.profile-page').on('click', '.submit', function(){

    	myName = $('#name').val();
    	myBio = $('#bio').val();
    	myFaveBooks = $('#fave-books').val();
    	myFaveJSLibs = $('#fave-jslibs').val();

    	$('.profile-form').toggle(function (){
    		$('.profile-form').removeClass("active");
    	}); 
    	
    	insertProfile();
    });


   	

}); //end of document ready function