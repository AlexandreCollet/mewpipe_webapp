angular.module('mewpipe')
       .controller('RegisterController', RegisterController);

RegisterController.$inject = ['$scope','toastr','Config'];

function RegisterController($scope,toastr,Config){

	$scope.regexEmail    = Config.regex.email;
	$scope.regexPassword = Config.regex.password;

	$scope.username     = "";
	$scope.email        = "";
	$scope.password     = "";
	$scope.confirmation = "";

	$scope.onSubmit = onSubmit;

	function onSubmit(isValid){

		if(!isValid){

			if(!$scope.username) toastr.error('Username required','Validation error');

			if(!$scope.regexEmail.test($scope.email))       toastr.error('Invalid email','Validation error');
			if(!$scope.regexPassword.test($scope.password)) toastr.error('Your password must contain minimum 6 characters, letters and at least one number','Validation error');

			if($scope.password !== $scope.confirmation) toastr.error('Passwords missmatch','Validation error');
			return;
		}

		toastr.success('Valid','Success');

	}
	
}