(function() {
    function HomeCtrl(Room, $uibModal, $scope, $cookies, Message) {
        var x = this;
        x.allRooms = Room.all;

        x.currentRoom = null;
        x.messages = null;
        x.roomIsSelected = false;
        x.currentUser = $cookies.get('blocChatCurrentUser');


        $scope.openModal = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'ModalCtrl',
                controllerAs: 'modal',
                templateUrl: '/templates/newRoomModal.html'
            });
        };

        $scope.activateRoom = function (roomSelected) {
            x.currentRoom = roomSelected;
            x.messages = Message.getByRoomId(x.currentRoom.$id);
            console.log(x.currentRoom.$id);
            x.roomIsSelected = true;
        };

        $scope.sendMessage = function(newMessage)  {
            x.newMessage.username = x.currentUser;
            x.newMessage.roomID = x.currentRoom.$id;
            var d = new Date();
            x.newMessage.sentAt = d.toLocaleTimeString();
            Message.send(x.newMessage);
            document.getElementById("message-text-box").value = "";
        };

        $scope.checkIfEnterKeyWasPressed = function($event){
            var keyCode = $event.keyCode;
            if (keyCode === 13) {
                $scope.sendMessage();
            }
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', '$scope','$cookies', 'Message', HomeCtrl]);
})();
