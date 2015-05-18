angular.module('mewpipe')
       .controller('SearchController', SearchController);

SearchController.$inject = ['$routeParams'];

function SearchController($routeParams){

	var vm = this;

	vm.string = $routeParams.string;

	vm.videos = [
		{
			name : "Shared #A",
			img  : "http://lorempicsum.com/futurama/400/225/1"
		},
		{
			name : "Shared #B",
			img  : "http://lorempicsum.com/futurama/400/225/2"
		},
		{
			name : "Shared #A",
			img  : "http://lorempicsum.com/futurama/400/225/1"
		},
		{
			name : "Shared #B",
			img  : "http://lorempicsum.com/futurama/400/225/2"
		},
		{
			name : "Shared #A",
			img  : "http://lorempicsum.com/futurama/400/225/1"
		},
		{
			name : "Shared #B",
			img  : "http://lorempicsum.com/futurama/400/225/2"
		},
		{
			name : "Shared #A",
			img  : "http://lorempicsum.com/futurama/400/225/1"
		},
		{
			name : "Shared #B",
			img  : "http://lorempicsum.com/futurama/400/225/2"
		},
		{
			name : "Shared #A",
			img  : "http://lorempicsum.com/futurama/400/225/1"
		},
		{
			name : "Shared #B",
			img  : "http://lorempicsum.com/futurama/400/225/2"
		},
		{
			name : "Shared #A",
			img  : "http://lorempicsum.com/futurama/400/225/1"
		},
		{
			name : "Shared #B",
			img  : "http://lorempicsum.com/futurama/400/225/2"
		},
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
		}
	];

}