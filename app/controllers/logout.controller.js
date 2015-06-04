angular.module('mewpipe')
       .controller('LogoutController', LogoutController);

LogoutController.$inject = ['$scope','$auth','toastr'];

function LogoutController($scope,$auth,toastr){

	toastr.success('You are now logged out','Success');
	$auth.logout('/');
	
}