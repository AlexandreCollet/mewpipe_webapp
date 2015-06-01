angular.module('mewpipe')
	   .controller('UploadController', UploadController);

UploadController.$inject = ['$scope','videosService','Upload','toastr','Config'];

function UploadController($scope,videosService,Upload,toastr,Config){

	$scope.titleMaxLength = Config.video.titleMaxLength;

	$scope.statusMessages = [
		"Select or drag your video",
		"Start upload",
		"Upload in progress",
		"Upload successfull",
		"Upload error"
	];

	$scope.status = 0; 
	$scope.file   = null;
	$scope.video  = null;
	$scope.uploadProgression = 0;

	$scope.validateFile = validateFile;
	$scope.editVideo    = editVideo;

	$scope.$watch('file',function(){
		if($scope.status !== 0 || !$scope.file || $scope.file.length == 0 || !validateFile($scope.file[0])) return;
		$scope.status = 1;
		create($scope.file[0]);
	});

	function create(file){
				
		var filename = /(.*)\.[^.]+$/.exec(file.name)[1];

		var video = new videosService({
			title : filename
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
		}).error(function(){
			$scope.status = 4;
		});
	
	}

	function editVideo(isValid){

		if(!isValid) return;
		$scope.video.tags = [];
		videosService.update({id : $scope.video.uid }, $scope.video);
	}

	function validateFile(file){

		var valid = true;

		if(file.size > Config.video.maxSize){
			valid = false;
			toastr.error('Error','Max size allowed is 500Mo');
		}
		if(!Config.regex.video.test(file.type)){
			valid = false;
			toastr.error('Error','Only videos are accepted');
		}

		return valid;
	}

}