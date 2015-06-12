angular.module('mewpipe')
	   .controller('UploadController', UploadController);

UploadController.$inject = ['$scope','videosService','Upload','toastr','Config'];

function UploadController($scope,videosService,Upload,toastr,Config){

	$scope.titleMaxLength = Config.video.titleMaxLength;
	$scope.privacyOptions = Config.video.privacyOptions;

	$scope.statusMessages = [
		"Select or drag your video",
		"Start upload",
		"Upload in progress",
		"Upload successful",
		"Upload error"
	];

	$scope.status = 0; 
	$scope.file   = null;
	$scope.video  = null;
	$scope.tags   = [];
	$scope.uploadProgression = 0;
	$scope.nbThumbnails      = 0;

	$scope.validateFile = validateFile;
	$scope.editVideo    = editVideo;

	$scope.$watch('file',function(){
		if($scope.status !== 0 || !$scope.file || $scope.file.length == 0 || !validateFile($scope.file[0])) return;
		$scope.status = 1;
		create($scope.file[0]);
	});

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

	function create(file){
				
		var filename = /(.*)\.[^.]+$/.exec(file.name)[1];

		var video = new videosService({
			title : filename.substring(0,Config.video.titleMaxLength)
		});

		video.$save(function(v){

			$scope.status = 2;
			$scope.video  = v;

			upload(v,file);
		});
	}

	function upload(video,file){

		Upload.upload({
			url    : Config.server.url + ":" + Config.server.port + "/api/videos/" + video.uid + "/upload",
			file   : file
		}).progress(function (event) {
			$scope.uploadProgression = parseInt(100.0 * event.loaded / event.total);
		}).success(function(data, status, headers, config){
			$scope.status = 3;
			videosService.findOne({id : $scope.video.uid}).$promise.then(function(video){
				$scope.video.duration      = video.duration;
				$scope.video.hr_duration   = video.hr_duration;
				$scope.video.thumbnail_url = video.thumbnail_url;
				$scope.nbThumbnails        = video.duration <= Config.video.nbThumbnailsMax ? video.duration-1 : Config.video.nbThumbnailsMax;
			})
		}).error(function(){
			$scope.status = 4;
		});
	
	}

	function editVideo(isValid){

		if(!validateForm()) return;

		videosService.update({id : $scope.video.uid }, $scope.video)
			.$promise.then(function(video){
				toastr.success('Video edited','Success');
				$scope.video = video;
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

	function validateFile(file){

		var valid = true;

		if(file.size > Config.video.maxSize){
			valid = false;
			toastr.error('Max size allowed is 500Mo','Validation error');
		}
		if(!Config.regex.video.test(file.type)){
			valid = false;
			toastr.error('Only videos are accepted','Validation error');
		}

		return valid;
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