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
	   			titleMaxLength  : 40,
	   			maxSize         : 524288000,
	   			nbThumbnailsMax : 100,
	   			status          : {
	   				NEW       : 0,
					UPLOADING : 1,
					UPLOADED  : 2,
					READY     : 3
	   			},
	   			privacyOptions  : [
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
	   			unknow   : { txt : "Unknow error", img : "/assets/img/errors/unknow.jpg" },
	   			messages : {

	   				300 : { txt : "Multiple Choices"   , img : null },
	   				301 : { txt : "Moved Permanently"  , img : null },
	   				302 : { txt : "Moved Temporarily"  , img : null },
	   				303 : { txt : "See Other"          , img : null },
	   				304 : { txt : "Not Modified"       , img : null },
	   				305 : { txt : "Use Proxy"          , img : null },
	   				306 : { txt : ""                   , img : null },
	   				307 : { txt : "Temporary Redirect" , img : null },
	   				308 : { txt : "Permanent Redirect" , img : null },
	   				310 : { txt : "Too many Redirects" , img : null },

	   				400 : { txt : "Bad Request"                          , img : null },
	   				401 : { txt : "Unauthorized"                         , img : null },
	   				402 : { txt : "Payment Required"                     , img : null },
	   				403 : { txt : "Forbidden"                            , img : "/assets/img/errors/403.jpg" },
	   				404 : { txt : "Not Found"                            , img : "/assets/img/errors/404.jpg" },
	   				405 : { txt : "Method Not Allowed"                   , img : null },
	   				406 : { txt : "Not Acceptable"                       , img : null },
	   				407 : { txt : "Proxy Authentication Required"        , img : null },
	   				408 : { txt : "Request Time-out"                     , img : null },
	   				409 : { txt : "Conflict"                             , img : null },
	   				410 : { txt : "Gone"                                 , img : null },
	   				411 : { txt : "Length Required"                      , img : null },
	   				412 : { txt : "Precondition Failed"                  , img : null },
	   				413 : { txt : "Request Entity Too Large"             , img : null },
	   				414 : { txt : "Request-URI Too Long"                 , img : null },
	   				415 : { txt : "Unsupported Media Type"               , img : null },
	   				416 : { txt : "Requested range unsatisfiable"        , img : null },
	   				417 : { txt : "Expectation failed"                   , img : null },
	   				418 : { txt : "I’m a teapot"                         , img : null },
	   				422 : { txt : "Unprocessable entity"                 , img : null },
	   				423 : { txt : "Locked"                               , img : null },
	   				424 : { txt : "Method failure"                       , img : null },
	   				425 : { txt : "Unordered Collection"                 , img : null },
	   				426 : { txt : "Upgrade Required"                     , img : null },
	   				428 : { txt : "Precondition Required"                , img : null },
	   				429 : { txt : "Too Many Requests"                    , img : null },
	   				431 : { txt : "Request Header Fields Too Large"      , img : null },
	   				449 : { txt : "Retry With"                           , img : null },
	   				450 : { txt : "Blocked by Windows Parental Controls" , img : null },
	   				456 : { txt : "Unrecoverable Error"                  , img : null },
	   				499 : { txt : "Client has closed connection"         , img : null },

	   				500 : { txt : "Internal server error"                    , img : "/assets/img/errors/500.jpg" },
	   				501 : { txt : "Not Implemented"                          , img : null },
	   				502 : { txt : "Bad Gateway"                              , img : null },
	   				503 : { txt : "Service Unavailable"                      , img : null },
	   				504 : { txt : "Gateway Time-out"                         , img : null },
	   				505 : { txt : "HTTP Version not supported"               , img : null },
	   				506 : { txt : "Variant also negociate"                   , img : null },
	   				507 : { txt : "Insufficient storage"                     , img : null },
	   				508 : { txt : "Loop detected"                            , img : null },
	   				509 : { txt : "Bandwidth Limit Exceeded"                 , img : null },
	   				510 : { txt : "Not extended"                             , img : null },
	   				520 : { txt : "Web server is returning an unknown error" , img : null },
	   			}
	   		}
	   });