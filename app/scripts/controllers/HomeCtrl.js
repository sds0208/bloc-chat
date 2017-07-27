(function() {
    function HomeCtrl(Room, $uibModal, $scope, Message) {
        var x = this;
        x.allRooms = Room.all;

        x.currentRoom = "";
        x.messages = "";
        x.roomIsSelected = false;

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
            x.messages = Message.getByRoomId(x.currentRoom.roomID);
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', '$scope', 'Message', HomeCtrl]);
})();
