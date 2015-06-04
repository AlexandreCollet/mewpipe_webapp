angular.module('mewpipe')
       .controller('LoginController', LoginController);

LoginController.$inject = ['$scope','$auth','toastr'];

function LoginController($scope,$auth,toastr){

	$scope.username = "";
	$scope.password = "";

	$scope.onSubmit = onSubmit;

	function onSubmit(isValid){

		if(!validateForm()) return false;

		var user = {
			username : $scope.username,
			password : $scope.password
		};

		var successCallback = function(){
			toastr.success('Successfully login','Success');
		};
		var errorCallback = function(){
			toastr.error('Error on login, try again', 'Error')
		}

		$auth.login(user).then(successCallback,errorCallback);

	}

	function validateForm(){

		var isValid = true;

		if(!$scope.username){
			isValid = false;
			toastr.error('Username required','Validation error');
		}

		if(!$scope.password){
			isValid = false;
			toastr.error('Password required','Validation error');
		}

		return isValid;
	}
	
}