(function (){

	/**
	 * DEFAULT VARIABLES
	 */
	
	var COLORS = ['yellow','blue','green','orange','violet'];

	var body = document.getElementById('body');

	/**
	 * MAIN
	 */

	selectColor();

	/**
	 * FUNCTIONS
	 */

	function selectColor(){
		var color = COLORS[Math.floor(Math.random()*COLORS.length)];
		body.className = color;
	}

})();