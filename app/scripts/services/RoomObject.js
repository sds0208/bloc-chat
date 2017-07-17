(function() {
    function RoomObject() {
        var RoomObject = {};
        RoomObject.obj = RoomObject;
        return RoomObject;
    }

    angular
        .module('blocChat')
        .factory('RoomObject', RoomObject)

})();
