'use strict';

tlApp.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope', '$timeout'];


function MainCtrl($scope, $timeout) {

	/*$scope.onSendMessage = function(){
		socket.emit('clientAdviserMessage', 'Salut serveur, ça va ?');
	}*/

	$scope.vm = {};

	socket.on('message', function(message) {
        
        $timeout(function(){
        	$scope.vm.newItem = true;
			$scope.vm.activeClass = true;
        	/*setTimeout(function(){
        		$scope.vm.activeClass = false;
        	}, 1500);*/

    	}, 0);
    });

}