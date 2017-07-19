(function() {
    function ModalCtrl($uibModalInstance, $scope) {

        //close Modal
        $scope.cancel = function()  {
            $uibModalInstance.dismiss('cancel');
        };
        //submit data to Firebase

    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', ModalCtrl]);
})();
