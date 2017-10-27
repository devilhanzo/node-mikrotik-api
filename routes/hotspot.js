/*
 * @Author: puck.solo 
 * @Date: 2017-10-25 15:04:46 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-27 16:37:35
 */
const express = require('express');
const router = express.Router();
const config = require('../config');
const MikroNode = require('mikronode-ng');
// const options = { timeout: 15, debug: 5, port: 8728 };
const host = config.router.host;
const user = config.router.user;
const password = config.router.password;

router.get('/test', (req, res, next) => {
    var connection = MikroNode.getConnection(host, user, password, {
        closeOnDone : true
    });
    
    connection.getConnectPromise().then(function(conn) {
        conn.getCommandPromise('/ip/address/print').then(function resolved(values) {
            // console.log('type of values: ' + typeof(JSON.stringify(values)));
            // console.log('type of values: ' + typeof(values));
            // return res.json(values);
            return res.send({ok: true, actives: values});
        }, function rejected(reason) {
            // console.log('Oops: ' + JSON.stringify(reason));
            return res.send({ok: false, reason: reason});
        });
    });
});
router.get('/test2', (req, res, next) => {
    var connection = MikroNode.getConnection(host, user, password, {
        closeOnDone : true
    });
    
    connection.getConnectPromise().then(function(conn) {
        conn.getCommandPromise('/ip/hotspot/active/print').then(function resolved(values) {
            // console.log('Addreses: ' + JSON.stringify(values));
            // return res.json(values);
            return res.send({ok: true, actives: values});
        }, function rejected(reason) {
            // console.log('Oops: ' + JSON.stringify(reason));
            return res.send({ok: false, reason: reason});
        });
    });
});

module.exports = router;