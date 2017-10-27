/*
 * @Author: puck.solo 
 * @Date: 2017-10-25 15:04:46 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-25 16:43:11
 */
const express = require('express');
const router = express.Router();
const api = require('mikronode');
const config = require('../config');

var MikroNode = require('mikronode');
var Device = new MikroNode('10.0.4.126',8728,30);


router.get('/', (req, res, next) => {
    console.log(config.router);
    // const connection = new api(config.router.host, config.router.user, config.router.password);
    // connection.connect(function (conn) {
        Device.connect().then(([login])=>login('admin','ydktp0td5%')).then(function(conn) { 
            console.log()
        var chan = conn.openChannel();
        conn.closeOnDone = true;
        chan.write('/ip/address/print', function () {
            chan.closeOnDone = true;
            chan.on('done', function (data) {
                var parsed = MikroNode.parseItems(data);
                parsed.forEach(function (item) {
                    console.log('Interface/IP: ' + item.interface + "/" + item.address);
                });
            });
            chan.once('trap', function (trap, chan) {
                console.log('Command failed: ' + trap);
            });
            chan.once('error', function (err, chan) {
                console.log('Oops: ' + err);
            });
        });
    });
});

module.exports = router;