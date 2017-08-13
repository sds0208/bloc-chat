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

        $scope.pressEnterCreateNewRoom = function($event){
            var keyCode = $event.keyCode;
            if (keyCode === 13) {
                $scope.createNewRoom();
            }
        };

        $scope.createUsername = function()  {
            $cookies.put('blocChatCurrentUser', x.username);
            if (x.username !== undefined && x.username !== "") {
                $uibModalInstance.close();
            }
            console.log(x.username);
        };

        $scope.pressEnterCreateUsername = function($event){
            var keyCode = $event.keyCode;
            if (keyCode === 13) {
                $scope.createUsername();
            }
        };

    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', '$cookies', ModalCtrl]);
})();
