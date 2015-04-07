(function() {
    'use strict';

    angular
        .module('app')
        .controller('indPropertyCardCtrl', indPropertyCardCtrl)
        .directive('indPropertyCard', indPropertyCard);

    function indPropertyCard() {

        return {
            restrict: 'E',
            scope: {
                image: '@',
                address: '@',
                city: '@',
                state: '@',
                zip: '@',
                beds: '@',
                baths: '@',
                squareFeet: '@'
            },
            bindToController: true,
            controller: 'indPropertyCardCtrl as ctrl',
            templateUrl: 'src/property-card/property-card.html'
        };

    }

    function indPropertyCardCtrl() {

    }

})();