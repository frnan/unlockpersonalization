'use strict';

tlApp.controller('ClientCtrl', ClientCtrl);

ClientCtrl.$inject = ['$scope'];


function ClientCtrl($scope) {


	$scope.pushItem = function(){
		socket.emit('clientAdviserPush', 'Salut serveur, ça va ?');
		alert("Message envoyé");
		var domToPush = angular.element(document.querySelector('.icon-client-content-to-push-container'));
		domToPush.remove();
	}

	/*$scope.onSendMessage = function(){
		socket.emit('clientAdviserMessage', 'Salut serveur, ça va ?');
	}*/

	/*socket.on('message', function(message) {
        alert('Le serveur a un message pour vous : ' + message);
    });*/

}