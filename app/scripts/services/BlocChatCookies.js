(function() {
    function BlocChatCookies($cookies, $uibModal)  {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
              animation: true,
              controller: 'ModalCtrl',
              controllerAs: 'modal',
              templateUrl: '/templates/usernameModal.html'
            });
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
