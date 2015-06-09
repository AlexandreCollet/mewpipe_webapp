angular.module('mewpipe')
	   .constant("Config", {
	   		domain : "mewpipe.ang",
	   		server : {
		   		url  : "http://10.0.0.102",
		   		port : 8000,
	   		},
	   		requests : {
	   			defaultLimit : 25
	   		},
	   		regex : {
	   			email    : new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i'),
	   			password : new RegExp('^(?=.{6,}$)(?=.*[a-z])(?=.*[0-9]).*','i'),
	   			video    : new RegExp('^video\/')
	   		},
	   		user : {
	   			usernameMaxLength  : 50,
	   			firstnameMaxLength : 50,
	   			lastnameMaxLength  : 50
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
	   		},
	   		errors : {
	   			default  : 500,
	   			unknow   : "Unknow error",
	   			messages : {

	   				300 : "Multiple Choices",
	   				301 : "Moved Permanently",
	   				302 : "Moved Temporarily",
	   				303 : "See Other",
	   				304 : "Not Modified",
	   				305 : "Use Proxy",
	   				306 : "",
	   				307 : "Temporary Redirect",
	   				308 : "Permanent Redirect",
	   				310 : "Too many Redirects",

	   				400 : "Bad Request",
	   				401 : "Unauthorized",
	   				402 : "Payment Required",
	   				403 : "Payment Required",
	   				404 : "Not Found",
	   				405 : "Method Not Allowed",
	   				406 : "Not Acceptable",
	   				407 : "Proxy Authentication Required",
	   				408 : "Request Time-out",
	   				409 : "Conflict",
	   				410 : "Gone",
	   				411 : "Length Required",
	   				412 : "Precondition Failed",
	   				413 : "Request Entity Too Large",
	   				414 : "Request-URI Too Long",
	   				415 : "Unsupported Media Type",
	   				416 : "Requested range unsatisfiable",
	   				417 : "Expectation failed",
	   				418 : "I’m a teapot",
	   				422 : "Unprocessable entity",
	   				423 : "Locked",
	   				424 : "Method failure",
	   				425 : "Unordered Collection",
	   				426 : "Upgrade Required",
	   				428 : "Precondition Required",
	   				429 : "Too Many Requests",
	   				431 : "Request Header Fields Too Large",
	   				449 : "Retry With",
	   				450 : "Blocked by Windows Parental Controls",
	   				456 : "Unrecoverable Error",
	   				499 : "Client has closed connection",

	   				500 : "Internal server error",
	   				501 : "Not Implemented",
	   				502 : "Bad Gateway",
	   				503 : "Service Unavailable",
	   				504 : "Gateway Time-out",
	   				505 : "HTTP Version not supported",
	   				506 : "Variant also negociate",
	   				507 : "Insufficient storage",
	   				508 : "Loop detected",
	   				509 : "Bandwidth Limit Exceeded",
	   				510 : "Not extended",
	   				520 : "Web server is returning an unknown error",
	   			}
	   		}
	   });