angular.module('mewpipe')
	   .controller('EditVideoController', EditVideoController);

EditVideoController.$inject = ['$scope','videosService','toastr','Config'];

function EditVideoController($scope,videosService,toastr,Config){

	var videoId    = $scope.ngDialogData.videoId;
	var videoIndex = $scope.ngDialogData.videoIndex;

	$scope.titleMaxLength = Config.video.titleMaxLength;
	$scope.privacyOptions = Config.video.privacyOptions;

	$scope.video  = $scope.$parent.videos[videoIndex];
	$scope.tags   = tagsArrayToObjects($scope.video.tags);

	$scope.editVideo = editVideo;

	$scope.$watchCollection('tags',function(newValues){
		if(!$scope.video) return;
		$scope.video.tags = tagsObjectsToArray(newValues);
	});

	$scope.$watchCollection('video.tags',function(newValues){
		if(!$scope.video) return;
		$scope.tags = tagsArrayToObjects(newValues);
	});

	$scope.$watch('video.thumbnail_frame', function(newValue){
		if(!$scope.video) return;
		$scope.video.thumbnail_url = Config.server.url + ":" + Config.server.port + "/api/videos/" + $scope.video.uid + "/thumbnail?t=" + newValue;
	});

	function editVideo(isValid){

		if(!validateForm()) return;

		videosService.update({id : $scope.video.uid }, $scope.video)
			.$promise.then(function(video){
				toastr.success('Video edited','Success');
				$scope.video = video;
				$scope.closeThisDialog();
			});
	}

	function validateForm(){

		if(!$scope.video) return false;

		var isValid = true;

		if(!$scope.video.title){
			isValid = false;
			toastr.error('Title is required','Validation error');
		}

		if($scope.video.title && $scope.video.title.length > $scope.titleMaxLength){
			isValid = false;
			toastr.error('Title max length : ' + $scope.titleMaxLength,'Validation error');
		}

		if($scope.video.privacy_policy === "" || $scope.video.privacy_policy === null || $scope.video.privacy_policy === undefined){
			isValid = false;
			toastr.error('Privacy need to be set','Validation error');
		}

		if($scope.video.privacy_policy !== "" && $scope.video.privacy_policy !== null && $scope.video.privacy_policy !== undefined){
			var validPrivacy = false;
			for(var i=0,l=$scope.privacyOptions.length;i<l;i++){
				if($scope.video.privacy_policy === $scope.privacyOptions[i].value){
					validPrivacy = true;
					break;
				}
			}
			if(!validPrivacy){
				isValid = false;
				toastr.error('Invalid privacy','Validation error');
			}
		}

		return isValid;
	}

	function tagsArrayToObjects(tags){
		var t = [];
		for(var i=0,l=tags.length;i<l;i++){
			t.push({ text : tags[i] });
		}
		return t;
	}

	function tagsObjectsToArray(tags){
		var t = [];
		for(var i=0,l=tags.length;i<l;i++){
			t.push(tags[i].text);
		}
		return t;
	}

}