angular.module('mewpipe')
	   .controller('ShareController', ShareController);

ShareController.$inject = ['$scope','Config'];

function ShareController($scope,Config){

	$scope.regexEmail = Config.regex.email;
	$scope.emails     = new Array(1);

	$scope.shareIt = shareIt;
	$scope.onChange  = onChange;

	function shareIt(){
		
		var emailsLength = $scope.emails.length;
		var validEmails  = [];

		for(var i=0;i<emailsLength;i++){
			if($scope.regexEmail.test($scope.emails[i])){
				validEmails.push($scope.emails[i]);
			}
		}

		console.log(validEmails);

	}

	function onChange(index){

		var emailsLength = $scope.emails.length;
		if(index !== emailsLength - 1) return;


		var addInput = true;
		for(var i=0;i<emailsLength;i++){
			if($scope.emails[i] === ""){
				addInput = false;
			}
		}

		if(addInput){
			$scope.emails.push(undefined);
		}
	}

}