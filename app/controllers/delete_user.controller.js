angular.module('mewpipe')
	   .controller('DeleteUserController', DeleteUserController);

DeleteUserController.$inject = ['$scope','usersService','toastr','Config'];

function DeleteUserController($scope,usersService,toastr,Config){
	
	$scope.confirm = confirm;

	function confirm(){

		var successCallback = function(){
			$scope.closeThisDialog();
			$auth.logout('/');
			toastr.success('Account deleted','Success');
		};

		var errorCallback = function(){
			toastr.error('Error on delete, try again','Error');
		};
		
		usersService.delete().$promise.then(successCallback,errorCallback);
	}

}