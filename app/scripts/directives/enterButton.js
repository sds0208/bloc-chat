(function() {
    function ngEnter(scope, element, attributes)  {

        element.bind("keypress", function(e)  {
            if ( e.which === 13)  {
                scope.$apply(function() {
                    scope.$eval(attributes.ngEnter, {'e': e});
                });

            }
        });

    }

    angular
        .module('blocChat')
        .directive('ngEnter', ['scope', 'element', 'attributes', ngEnter]);

})();
