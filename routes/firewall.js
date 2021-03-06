const express = require('express');
const router = express.Router();
const config = require('../config');
const MikroNode = require('mikronode-ng');
// const options = { timeout: 15, debug: 5, port: 8728 };
const host = config.router.host;
const user = config.router.user;
const password = config.router.password;

router.get('/address-list', (req, res, next) => {
    var connection = MikroNode.getConnection(host, user, password, {
        timeout : 15,
        closeOnDone : true,
        closeOnTimeout: true,
    });

    connection.getConnectPromise().then(function(conn) {
        conn.getCommandPromise('/ip/firewall/address-list/print').then(function resolved(values) {
            // console.log('Addreses: ' + JSON.stringify(values));
            // return res.json(values);
            return res.send({ok: true, actives: values});
        }, function rejected(reason) {
            return res.send({ok: false, reason: reason});
        }).catch(function(error) {
            res.send({ok:false, reason: error});
        });
    }).catch(function(error) {
        res.send({ok:false, reason: error});
    });
});

router.get('/address-list/find/:list', (req, res, next) => {
    var connection = MikroNode.getConnection(host, user, password, {
        timeout : 15,
        closeOnDone : true,
        closeOnTimeout: true,
    });
    let list = req.params.list;
    
    connection.getConnectPromise().then(function(conn) {
        conn.getCommandPromise(['/ip/firewall/address-list/print','?list='+list]).then(function resolved(values) {
            return res.send({ok: true, actives: values});
        }, function rejected(reason) {
            return res.send({ok: false, reason: reason});
        }).catch(function(error) {
            res.send({ok:false, reason: error})
        })
    }).catch(function(error) {
        res.send({ok:false, reason: error});
    });
});

// router.delete('/active/:id', (req, res, next)=> {
//     let id = req.params.id;
//     var connection = MikroNode.getConnection(host, user, password, {
//         timeout : 15,
//         closeOnDone : true,
//         closeOnTimeout: true,
//     });
//     connection.getConnectPromise().then(function(conn) {
//         conn.getCommandPromise(['/ip/hotspot/active/remove','=.id='+id]).then(function resolved(result) {
//             return res.send({ok: true, actives: result});
//         }, function rejected(reason) {
//             return res.send({ok: false, reason: reason});
//         }).catch(function(error) {
//             res.send({ok:false, reason: error})
//         })
//     }).catch(function(error) {
//         res.send({ok:false, reason: error});
//     });

// });

module.exports = router;