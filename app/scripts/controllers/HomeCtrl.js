(function() {
    function HomeCtrl(Room, $uibModal, $scope, $cookies, Message) {
        var x = this;
        x.allRooms = Room.all;

        x.currentRoom = "";
        x.messages = "";
        x.roomIsSelected = false;
        x.currentUser = $cookies.get('blocChatCurrentUser');
        x.timeStamp = "";

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
        };

        $scope.sendMessage = function(newMessage)  {
            x.newMessage.username = x.currentUser;
            x.newMessage.roomId = x.currentRoom.$id;
            Message.send(x.newMessage);
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', '$scope','$cookies', 'Message', HomeCtrl]);
})();
