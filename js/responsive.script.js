$(function() {//on document load
	
	$('#mobileTopMenuBtn').click(function(e){
		$('#mobileHeaderNav').stop().slideToggle(400);
		$(this).toggleClass('menuDown');
		return false;
	});
	
	//dynamically create the left menu btn DOM
	var leftMenuBtn = $('<a class="leftMenuBtn" href="#"></a>');
	$('#main-container-wrapper').append(leftMenuBtn);
	leftMenuBtn.click(function(e){
		e.preventDefault();
		$('#left-column-container').stop().slideToggle(400);
		$(this).toggleClass('menuDown');
		return false;
	});
	
	$(window).resize(function(){//window is resized
		//make sure the whole nav is visible if the screen is larger
		if($(window).width() > 620){
			$('#left-column-container').show();
			$('#left-column-container .left-navigation-holder li').removeAttr("selected");
		}else{
			$('#left-column-container').hide();
		}
	});
	
});