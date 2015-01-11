(function () {
    'use strict';

    var combine = require('stream-combiner');
    var zlib = require('zlib');
    var split = require('split');
    var through = require('through');

    module.exports = function() {
        var currentRecord = '';

        var processBook = function(line) {
            if (line.length === 0) return;

            var lineAsJson = JSON.parse(line);

            if (lineAsJson.type === 'genre') {
                if (currentRecord) {
                    this.queue(JSON.stringify(currentRecord) + '\n');
                }

                currentRecord = { 'name': lineAsJson.name, 'books': []};
            }
            else {
                currentRecord.books.push(lineAsJson.name);
            }
        };

        var outputBooks = function() {
            if (currentRecord) {
                this.queue(JSON.stringify(currentRecord) + '\n');
            }
            this.queue(null);
        };

        return combine(
            split(),
            through(processBook, outputBooks),
            zlib.createGzip()
        );

    };
})();
