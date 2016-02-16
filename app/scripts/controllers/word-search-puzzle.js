// http://pdanis.github.io/angular-puzzle/


    'use strict';

    var wordSearchPuzzle = angular.module('wordSearchPuzzle', []);

    /**
     * Service
     */
    wordSearchPuzzle.factory('wordSearchPuzzle', function() {
        /**
         * Word search puzzle
         * @param matrix
         * @param words
         * @constructor
         */
        function WordSearchPuzzle(matrix, words) {
            var maxRow = 0,
                maxCol = 0;

            /**
             * Matrix
             * @type {Array}
             */
            this.matrix = [];

            /**
             * Words
             * @type {Array}
             */
            this.words = [];

            /**
             * Is solved?
             * @type {Boolean}
             */
            this.solved = false;

            // parse matrix and words
            angular.forEach(matrix, function(letters, row) {
                angular.forEach(letters, function(letter, col) {
                    var item = {
                        letter: letter,
                        col: col,
                        row: row,
                        used: false
                    };
                    if (!this.matrix[row]) {
                        this.matrix[row] = [];
                    }
                    this.matrix[row].push(item);
                    maxCol = col;
                }, this);
                maxRow = row;
            }, this);
            angular.forEach(words, function(word) {
                this.words.push({
                    name: word
                });
            }, this);

            /**
             * Returns matrix item by coords
             * @param col
             * @param row
             * @return {*}
             */
            this.getItem = function(col, row) {
                return (this.matrix[row] ? this.matrix[row][col] : undefined);
            };

            /**
             * Returns matrix items by start/end coords
             * @param colFrom
             * @param rowFrom
             * @param colTo
             * @param rowTo
             * @return {Array}
             */
            this.getItems = function(colFrom, rowFrom, colTo, rowTo) {
                var items = [];

                if (rowTo > maxRow) {
                    rowTo = maxRow;
                }
                if (colTo > maxCol) {
                    colTo = maxCol;
                }

                if (this.getItem(colTo, rowTo) === undefined) {
                    return items;
                }

                if (colFrom === colTo || rowFrom === rowTo || Math.abs(colTo - colFrom) === Math.abs(rowTo - rowFrom)) {
                    var shiftX = (colFrom === colTo ? 0 : (colTo > colFrom ? 1 : -1)),
                        shiftY = (rowFrom === rowTo ? 0 : (rowTo > rowFrom ? 1 : -1)),
                        col = colFrom,
                        row = rowFrom;

                    items.push(this.getItem(col, row));
                    do {
                        col += shiftX;
                        row += shiftY;
                        items.push(this.getItem(col, row));
                    } while (col !== colTo || row !== rowTo);
                }

                return items;
            };

            /**
             * Check items - find word
             * @param items
             */
            this.lookup = function(items) {
                if (!items.length) {
                    return;
                }

                // create words
                var words = [''];
                angular.forEach(items, function(item) {
                    words[0] += item.letter;
                });
                words.push(words[0].split('').reverse().join(''));	// word in reverse order (when selecting)

                // check words
                this.solved = true;
                angular.forEach(this.words, function(word) {
                    if (word.found) {
                        return;
                    }
                    angular.forEach(words, function(itemWord) {
                        if (word.name === itemWord) {
                            word.found = true;
                            angular.forEach(items, function(item) {
                                item.found = true;
                            });
                        }
                    });
                    if (!word.found) {
                        this.solved = false;
                    }
                }, this);
            };

            /**
             * Solves puzzle
             */
            this.solve = function() {
                var start = {},
                    directions = {
                        N: [0, -1], E: [1, 0], S: [0, 1], W: [-1, 0],
                        NE: [1, -1], NW: [-1, -1], SE: [1, 1], SW: [-1, 1]
                    };

                // group items by letters for faster search
                angular.forEach(this.matrix, function(items) {
                    angular.forEach(items, function(item) {
                        if (!start[item.letter]) {
                            start[item.letter] = [];
                        }
                        start[item.letter].push(item);
                    });
                });

                angular.forEach(this.words, function(word) {
                    angular.forEach(start[word.name.charAt(0)], function(start) {
                        if (word.found) {
                            return;
                        }
                        angular.forEach(directions, function(shift) {
                            if (word.found) {
                                return;
                            }
                            this.lookup(this.getItems(
                                start.col, start.row,
                                start.col + (word.name.length - 1) * shift[0],
                                start.row + (word.name.length - 1) * shift[1]
                            ));
                        }, this);
                    }, this);
                }, this);
            };
        }

        return function(matrix, words) {
            return new WordSearchPuzzle(matrix, words);
        };
    });
    

    wordSearchPuzzle.controller('wordSearchCtrl', function($scope) {
        $scope.matrix = [
       ['N','H','J','G','H','I','E','L','A','N','A','T','G','S','R'],
       ['E','O','R','E','K','A','E','P','S','M','N','Q','U','T','E'],
       ['E','V','I','T','A','L','S','I','G','E','L','B','S','N','P'],
       ['T','S','S','S','Y','P','N','H','M','C','T','I','E','E','R'],
       ['A','O','N','B','S','I','O','N','O','O','Y','L','N','M','E'],
       ['N','H','P','O','T','E','R','L','M','U','I','L','A','D','S'],
       ['E','J','Q','S','I','E','S','M','I','E','S','S','T','N','E'],
       ['S','Z','U','I','V','T','I','B','L','T','Q','E','O','E','N'],
       ['X','A','V','O','C','T','U','E','R','J','I','D','R','M','T'],
       ['L','C','G','B','T','B','C','L','P','Z','P','C','S','A','A'],
       ['I','M','N','E','T','T','U','Q','O','T','E','X','A','S','T'],
       ['S','D','E','X','I','P','B','U','X','S','W','Q','F','L','I'],
       ['S','U','F','O','L','H','I','Y','R','P','E','Y','B','U','V'],
       ['B','D','N','V','N','B','Z','Y','K','D','Y','R','X','K','E'],
       ['Q','C','O','M','M','I','T','T','E','E','V','X','P','U','S']
        ];
        $scope.words = [
            'TEXAS','SENATE','HOUSE','REPRESENTATIVES','SENATORS','LEGISLATIVE','COMMITTEE','RESOLUTIONS','BILLS','SPEAKER',
            'SESSION','ELECTION','AUSTIN','AMENDMENTS','POLITICAL','GOVERNMENT'
        ];
    });

   // wordSearchPuzzle.controller('wordSearchCtrl', function($scope) {
   //      $scope.matrix = [
   //          ['N', 'I', 'G', 'O', 'R', 'Y', 'G', 'S', 'T', 'T', 'A', 'N'],
   //          ['O', 'G', 'G', 'U', 'L', 'C', 'O', 'E', 'P', 'E', 'A', 'S'],
   //          ['I', 'N', 'N', 'R', 'M', 'N', 'O', 'R', 'I', 'M', 'E', 'C'],
   //          ['T', 'I', 'A', 'I', 'O', 'E', 'G', 'V', 'R', 'P', 'V', 'E'],
   //          ['C', 'T', 'T', 'E', 'D', 'D', 'L', 'I', 'C', 'L', 'I', 'N'],
   //          ['E', 'S', 'J', 'P', 'U', 'N', 'E', 'C', 'S', 'A', 'T', 'A'],
   //          ['J', 'E', 'O', 'O', 'L', 'E', 'I', 'E', 'A', 'T', 'C', 'R'],
   //          ['N', 'T', 'V', 'C', 'E', 'P', 'J', 'B', 'V', 'E', 'E', 'I'],
   //          ['I', 'S', 'I', 'S', 'S', 'E', 'S', 'A', 'A', 'W', 'R', 'O'],
   //          ['O', 'K', 'S', 'I', 'M', 'D', 'E', 'S', 'J', 'O', 'I', 'M'],
   //          ['R', 'E', 'L', 'L', 'O', 'R', 'T', 'N', 'O', 'C', 'D', 'E']
   //      ];
   //      $scope.words = [
   //          'binding', 'CONTROLLER', 'DEPENDENCY', 'DIRECTIVE', 'GOOGLE', 'IGOR', 'INJECTION', 'JAVASCRIPT',
   //          'MISKO', 'MODULES', 'SCENARIO', 'SCOPE', 'SERVICE', 'TEMPLATE', 'TESTING', 'VOJTA'
   //      ];
   //  });

    /**
     * Directive
     */

    wordSearchPuzzle.directive('wordSearchPuzzle', function(wordSearchPuzzle) {
        return {
            restrict: 'EA',
            replace: true,
            template: '<table class="word-search-puzzle" cellspacing="0" ng-class="{\'puzzle-solved\': puzzle.solved}">' +
                '<tr ng-repeat="items in puzzle.matrix">' +
                '<td ng-repeat="item in items" unselectable="on"' +
                ' ng-class="{\'puzzle-found\': item.found, \'puzzle-selected\': item.selected, \'puzzle-message\': puzzle.solved && !item.found}"' +
                ' ng-mousedown="selectStart(item)" ng-mouseup="selectEnd()" ng-mouseenter="selectEnter(item)">' +
                ' <span>{{item.letter}}</span>' +
                '</td>' +
                '</tr>' +
                '</table>',
            scope: {
                matrix: '=',
                words: '=',
                api: '='
            },
            link: function(scope, element, attrs) {
                var selectFrom;

                // setup puzzle
                scope.$watch('matrix', function(matrix) {
                    scope.puzzle = wordSearchPuzzle(matrix, scope.words);

                    // link service
                    if (attrs.api) {
                        scope.api = scope.puzzle;
                    }
                });

                /**
                 * Selected items
                 * @type {Array}
                 */
                scope.selected = [];

                /**
                 * Selection start
                 * @param item
                 */
                scope.selectStart = function(item) {
                    selectFrom = item;
                };

                /**
                 * Selection enter (over)
                 * @param item
                 */
                scope.selectEnter = function(item) {
                    if (selectFrom) {
                        scope.selected = scope.puzzle.getItems(selectFrom.col, selectFrom.row, item.col, item.row);
                    }
                };

                /**
                 * Selection end
                 */
                scope.selectEnd = function() {
                    selectFrom = null;
                    scope.puzzle.lookup(scope.selected);
                    scope.selected = [];
                };

                // propagate selection state to matrix
                scope.$watch('selected', function(newItems, oldItems) {
                    angular.forEach(oldItems, function(item) {
                        item.selected = false;
                    });
                    angular.forEach(newItems, function(item) {
                        item.selected = true;
                    });
                });
            }
        };
    });