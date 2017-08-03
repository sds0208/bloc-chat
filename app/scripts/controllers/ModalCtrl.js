(function() {
    function ModalCtrl($scope, $uibModalInstance, Room) {
        var x = this;
        //close Modal
        $scope.cancel = function()  {
            $uibModalInstance.close();
        };
        //submit data to Firebase
        $scope.createNewRoom = function() {
            Room.add(x.newRoom);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', ModalCtrl]);
})();
