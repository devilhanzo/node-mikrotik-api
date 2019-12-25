const express = require('express');
const router = express.Router();
const config = require('../config');
const MikroNode = require('mikronode-ng');
// const options = { timeout: 15, debug: 5, port: 8728 };
const host = config.router.host;
const user = config.router.user;
const password = config.router.password;

router.get('/', (req, res, next) => {
    var connection = MikroNode.getConnection(host, user, password, {
        timeout : 15,
        closeOnDone : true,
        closeOnTimeout: true,
    });
    
    connection.getConnectPromise().then(function(conn) {
        conn.getCommandPromise('/ip/address/print').then(function resolved(values) {
            // console.log('type of values: ' + typeof(JSON.stringify(values)));
            // console.log('type of values: ' + typeof(values));
            // return res.json(values);
            return res.send({ok: true, address: values});
        }, function rejected(reason) {
            // console.log('Oops: ' + JSON.stringify(reason));
            return res.send({ok: false, reason: reason});
        }) .catch(function(error) {
            res.send({ok:false, reason: error})
        })
    }).catch(function(error) {
        res.send({ok:false, reason: error});
    });
});

router.get('/detail/:id', (req, res, next) => {
    let id = req.params.id;
    var connection = MikroNode.getConnection(host, user, password, {
        timeout : 15,
        closeOnDone : true,
        closeOnTimeout: true,
    });
    
    connection.getConnectPromise().then(function(conn) {
        conn.getCommandPromise(['/ip/address/print', '?.id='+id]).then(function resolved(values) {
            return res.send({ok: true, address: values});
        }, function rejected(reason) {
            return res.send({ok: false, reason: reason});
        });
    }) .catch(function(error) {
        res.send({ok:false, reason: error})
    }).catch(function(error) {
        res.send({ok:false, reason: error});
    });
});
module.exports = router;