/**
 * Created by eliasmj on 11/10/2016.
 */

(function () {
    'use strict'

    var express = require('express');
    var app = express();

    var path    = require("path");

    app.use(express.static('app'));
    app.use(express.static('public'));

    app.get('/', function (req, res) {
        //res.send('Hello World!');
        res.sendFile(path.join(__dirname+'/test.html'));
    });

    app.listen(8000, function () {
        console.log('Example app listening on port 8000!');
    });


})();
