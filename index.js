/* jshint globalstrict:true, node:true */
'use strict';

var poCompile = require('broccoli-po2json');

module.exports = {
    name: 'ember-cli-po2json',

    setupPreprocessorRegistry: function (type, registry) {
        registry.add('js', {
            name: 'ember-cli-po2json',
            ext: 'po',
            toTree: function (tree, inputPath, outputPath) {
                return poCompile(tree, {
                    destDir: outputPath + '/locale',
                    srcDir: '/' + registry.app.name,
                    es6: true
                });
            }
        });
    },

    treeForApp: function () {
        return 'locale';
    }
};
