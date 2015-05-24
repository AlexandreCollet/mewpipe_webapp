angular.module('mewpipe')
	   .controller('ShareController', ShareController);

ShareController.$inject = ['$scope','Config'];

function ShareController($scope,Config){

	$scope.regexEmail = Config.regex.email;

	$scope.destEmails  = new Array(1);
	$scope.senderEmail = "";

	$scope.shareIt  = shareIt;
	$scope.onChange = onChange;

	function shareIt(){
		
		var emailsLength    = $scope.destEmails.length;
		var validDestEmails = [];

		for(var i=0;i<emailsLength;i++){
			if($scope.regexEmail.test($scope.destEmails[i])){
				validEmails.push($scope.destEmails[i]);
			}
		}

		console.log(validDestEmails);
	}

	function onChange(index){

		var emailsLength = $scope.destEmails.length;
		if(index !== emailsLength - 1) return;


		var addInput = true;
		for(var i=0;i<emailsLength;i++){
			if($scope.destEmails[i] === ""){
				addInput = false;
			}
		}

		if(addInput){
			$scope.destEmails.push(undefined);
		}
	}

}