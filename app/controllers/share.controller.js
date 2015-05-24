angular.module('mewpipe')
	   .controller('ShareController', ShareController);

ShareController.$inject = ['$routeParams','$scope','videosService','Config'];

function ShareController($routeParams,$scope,videosService,Config){
	$scope.regexEmail = Config.regex.email;

	$scope.dest_addresses = new Array(1);
	$scope.sender_address = "";

	$scope.shareIt  = shareIt;
	$scope.onChange = onChange;

	function shareIt(){
		
		var emailsLength = $scope.dest_addresses.length;

		var validSenderAddress = $scope.regexEmail.test($scope.sender_address) ? $scope.sender_address : "";
		var validDestAddresses = [];

		for(var i=0;i<emailsLength;i++){
			if($scope.regexEmail.test($scope.dest_addresses[i])){
				validDestAddresses.push($scope.dest_addresses[i]);
			}
		}

		if(!validSenderAddress || validDestAddresses.length === 0){
			return;
		}

		var share = new videosService({ id : $routeParams.id });

		share.dest_addresses = validDestAddresses;
		share.sender_address = validSenderAddress;
		share.video_link     = "http://" + Config.domain + "/#/videos/" + $routeParams.id;

		share.$share(function(video){
			$scope.$parent.video = video;
			$scope.closeThisDialog();
		});

	}

	function onChange(index){

		var destAddressesLength = $scope.dest_addresses.length;
		if(index !== destAddressesLength - 1) return;


		var addInput = true;
		for(var i=0;i<destAddressesLength;i++){
			if($scope.dest_addresses[i] === ""){
				addInput = false;
			}
		}

		if(addInput){
			$scope.dest_addresses.push(undefined);
		}
	}

}