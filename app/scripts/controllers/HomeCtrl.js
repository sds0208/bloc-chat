(function() {
    function HomeCtrl(Room, $uibModal) {
        this.allRooms = Room.all;

        home.open = function() {
            $uibModal.open({
            templateUrl: '/templates/newRoomModal.html',
            size: 'sm',
            controller: 'ModalCtrl as modal'
            });
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'RoomObject', 'uibModal', HomeCtrl]);
})();
