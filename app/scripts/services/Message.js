(function() {
    function Message($firebaseArray)  {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);


        Message.getByRoomId = function(roomId)  {
            return $firebaseArray(ref.orderByChild('roomID').equalTo(roomId));
        };

        /*Message.send = function(newMessage) {
            //Send message logic
            messages.$add(newMessage);
        };*/

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
