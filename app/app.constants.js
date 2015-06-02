angular.module('mewpipe')
	   .constant("Config", {
	   		domain : "mewpipe.ang",
	   		server : {
		   		url  : "http://10.0.0.102",
		   		port : 8000,
	   		},
	   		requests : {
	   			defaultLimit : 10
	   		},
	   		regex : {
	   			email    : new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i'),
	   			password : new RegExp('^(?=.{6,}$)(?=.*[a-z])(?=.*[0-9]).*'),
	   			video    : new RegExp('^video\/')
	   		},
	   		video : {
	   			titleMaxLength : 40,
	   			maxSize        : 524288000,
	   			privacyOptions : [
	   				{
	   					value   : 0,
	   					label   : "Public (Available to anybody)",
	   					default : true,
	   				},
	   				{
	   					value   : 1,
	   					label   : "Private Link (Available to anybody unauthenticated with the link)",
	   					default : false,
	   				},
	   				{
	   					value   : 2,
	   					label   : "Private (Available only to authenticated users)",
	   					default : false,
	   				},
	   			]
	   		}
	   });