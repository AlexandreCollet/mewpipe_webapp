angular.module('mewpipe')
	   .config(function(){

	   })
	   .constant("Config", {
	   		server : {
		   		url  : "http://10.0.0.102",
		   		port : 8000,
	   		},
	   		requests : {
	   			defaultLimit : 10
	   		},
	   		regex : {
	   			email : new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i')
	   		}
	   });
