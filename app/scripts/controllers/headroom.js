'use strict';

var headroom =  angular.module('headroom', []);
    headroom.directive('headroom', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: '<div ng-transclude></div>',
            link: function (scope, element, attrs) {
                var headroom, options;

                var setupOptions = function () {
                    if (options)
                        return;

                    options = [];
                    angular.forEach(Headroom.options, function (value, key) {
                        if (key == 'classes' && attrs[key])
                            options[key] = angular.fromJson(attrs[key]);
                        else
                            options[key] = attrs[key] || Headroom.options[key];
                    });

                    if (attrs.onPin) {
                        options.onPin = function () {
                            scope.$apply(attrs.onPin);
                        };
                    }
                    if (attrs.onUnpin) {
                        options.onUnpin = function () {
                            scope.$apply(attrs.onUnpin);
                        };
                    }
                    if (attrs.onTop) {
                        options.onTop = function () {
                            scope.$apply(attrs.onTop);
                        };
                    }
                    if (attrs.onNotTop) {
                        options.onNotTop = function () {
                            scope.$apply(attrs.onNotTop);
                        };
                    }
                };

                var initialize = function () {
                    setupOptions();
                    headroom = new Headroom(element[0], options);
                    headroom.init();
                };

                var destroy = function () {
                    if (headroom)
                        headroom.destroy();
                };

                attrs.$observe('disabled', function (value) {
                    if (angular.isUndefined(value))
                        return;

                    if (value === true)
                        destroy();
                    else
                        initialize();
                });

                scope.$on('$destroy', function () {
                    destroy();
                });
            }
        };
    });
