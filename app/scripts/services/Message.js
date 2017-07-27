(function() {
    function Message($firebaseArray)  {
        var Message = {};
        var ref = firebase.database().ref().child("messages").orderByChild("roomID");
        var messages = $firebaseArray(ref);


        Message.getByRoomId = function(roomId)  {
            return messages.equalTo(roomId);
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
