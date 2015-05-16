angular.module('mewpipe')
       .controller('HomeController', HomeController);

function HomeController(){

	var vm = this;

	vm.videos = {
		mostShared : [
			{
				name : "Shared #A",
				img  : "http://lorempicsum.com/futurama/400/225/1"
			},
			{
				name : "Shared #B",
				img  : "http://lorempicsum.com/futurama/400/225/2"
			},
			{
				name : "Shared #C",
				img  : "http://lorempicsum.com/futurama/400/225/3"
			},
			{
				name : "Shared #D",
				img  : "http://lorempicsum.com/futurama/400/225/4"
			},
			{
				name : "Shared #E",
				img  : "http://lorempicsum.com/futurama/400/225/5"
			},
			{
				name : "Shared #F",
				img  : "http://lorempicsum.com/futurama/400/225/6"
			},
		],
		mostViewed : [
			{
				name : "Played #A",
				img  : "http://lorempicsum.com/simpsons/400/225/6"
			},
			{
				name : "Played #B",
				img  : "http://lorempicsum.com/simpsons/400/225/1"
			},
			{
				name : "Played #C",
				img  : "http://lorempicsum.com/simpsons/400/225/2"
			},
			{
				name : "Played #D",
				img  : "http://lorempicsum.com/simpsons/400/225/5"
			},
			{
				name : "Played #E",
				img  : "http://lorempicsum.com/simpsons/400/225/4"
			},
			{
				name : "Played #F",
				img  : "http://lorempicsum.com/simpsons/400/225/3"
			},
		]
	};

}