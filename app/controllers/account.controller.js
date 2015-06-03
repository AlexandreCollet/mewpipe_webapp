angular.module('mewpipe')
       .controller('AccountController', AccountController);

AccountController.$inject = ['$scope','$location','toastr','Config'];

function AccountController($scope,$location,toastr,Config){

	$scope.usernameMaxLength  = Config.user.usernameMaxLength;
	$scope.firstnameMaxLength = Config.user.firstnameMaxLength;
	$scope.lastnameMaxLength  = Config.user.lastnameMaxLength;
	$scope.regexEmail         = Config.regex.email;
	$scope.regexPassword      = Config.regex.password;
	
	$scope.username         = "";
	$scope.firstname        = "";
	$scope.lastname         = "";
	$scope.email            = "";
	$scope.current_password = "";
	$scope.new_password     = "";
	$scope.confirmation     = "";

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
			toastr.success('Account edited','Success');
		};
		var errorCallback = function(){
			toastr.error('Error on edit, try again', 'Error')
		}

	}

	function validateForm(){

		var isValid = true;

		if(!$scope.username){
			isValid = false;
			toastr.error('Username required','Validation error');
		}

		if(!$scope.current_password){
			isValid = false;
			toastr.error('Current password required','Validation error');
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
		if(!$scope.regexPassword.test($scope.new_password)){
			isValid = false;
			toastr.error('Your password must contain minimum 6 characters, letters and at least one number','Validation error');
		} 

		if($scope.new_password !== $scope.confirmation){
			isValid = false;
			toastr.error('Passwords missmatch','Validation error');
		}

		return isValid;
	}
	
}