(function() {
    function ModalCtrl($uibModalInstance, Room)  {
        var modal = this;

        //close method
        modal.cancel = function() {
            $uibModalInstance.dismiss();
        };
        //submit data to Firebase
        modal.createNewRoom = function()  {
            Room.add(modal.newChatRoom);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat', ['ui.bootstrap'])
        .controller('ModalCtrl', [ModalCtrl])
})();
