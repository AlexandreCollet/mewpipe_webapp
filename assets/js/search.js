(function (){

	/**
	 * DEFAULT VARIABLES
	 */
	
	var searchInput = document.getElementById('search_input');

	var body      = document.getElementById('body');
	var hamburger = document.getElementById('hamburger');

	/**
	 * MAIN
	 */

	 searchFocus();

	/**
	 * EVENTS
	 */
	
	hamburger.addEventListener('click',function(){
		
		if(body.hasClass('is_open')){
			body.removeClass('is_open');
			hamburger.removeClass('is_active');
		}else{
			body.addClass('is_open');
			hamburger.addClass('is_active');
		}
	
	});
	
	/**
	 * FUNCTIONS
	 */

	function searchFocus(){
	 	searchInput.focus();
	}

})();