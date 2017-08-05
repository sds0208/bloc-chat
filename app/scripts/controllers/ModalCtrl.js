(function() {
    function ModalCtrl($scope, $uibModalInstance, Room, $cookies) {
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

        $scope.createUsername = function()  {
            $cookies.put('blocChatCurrentUser', x.username);
            if (x.username !== undefined && x.username !== "") {
                $uibModalInstance.close();
            }
            console.log(x.username);
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', '$cookies', ModalCtrl]);
})();
