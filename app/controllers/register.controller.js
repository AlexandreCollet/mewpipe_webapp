angular.module('mewpipe')
       .controller('RegisterController', RegisterController);

RegisterController.$inject = ['$scope','toastr','Config'];

function RegisterController($scope,toastr,Config){

	$scope.usernameMaxLength  = Config.user.usernameMaxLength;
	$scope.firstnameMaxLength = Config.user.firstnameMaxLength;
	$scope.lastnameMaxLength  = Config.user.lastnameMaxLength;
	$scope.regexEmail         = Config.regex.email;
	$scope.regexPassword      = Config.regex.password;

	$scope.username     = "";
	$scope.firstname    = "";
	$scope.lastname     = "";
	$scope.email        = "";
	$scope.password     = "";
	$scope.confirmation = "";

	$scope.onSubmit = onSubmit;

	function onSubmit(isValid){

		if(!validateForm())	return;
		
		var user = {
			username  : $scope.username,
			firstname : $scope.firstname,
			lastname  : $scope.lastname,
			email     : $scope.email,
			password1 : $scope.password,
			password2 : $scope.confirmation
		}

		var successCallback = function(){
			toastr.success('Successfully registered','Success');
		};
		var errorCallback = function(){
			toastr.error('Error on registration, try again', 'Error')
		}

	}

	function validateForm(){

		var isValid = true;

		if(!$scope.username){
			isValid = false;
			toastr.error('Username required','Validation error');
		}

		if($scope.username && $scope.username.length > $scope.usernameMaxLength){
			isValid = false;
			toastr.error('Username max length is ' + $scope.usernameMaxLength,'Validation error');
		}
		if($scope.firstname && $scope.firstname.length > $scope.firstnameMaxLength){
			isValid = false;
			toastr.error('Firstname max length is ' + $scope.firstnameMaxLength,'Validation error');
		}
		if($scope.lastname && $scope.lastname.length > $scope.lastnameMaxLength){
			isValid = false;
			toastr.error('Lastname max length is ' + $scope.lastnameMaxLength,'Validation error');
		}

		if(!$scope.regexEmail.test($scope.email)){
			isValid = false;
			toastr.error('Invalid email','Validation error');
		}      
		if(!$scope.regexPassword.test($scope.password)){
			isValid = false;
			toastr.error('Your password must contain minimum 6 characters, letters and at least one number','Validation error');
		} 

		if($scope.password !== $scope.confirmation){
			isValid = false;
			toastr.error('Passwords missmatch','Validation error');
		}

		return isValid;
	}
	
}