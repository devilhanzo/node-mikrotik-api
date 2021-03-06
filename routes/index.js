/*
 * @Author: puck.solo 
 * @Date: 2017-10-25 13:50:05 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-25 15:04:51
 */
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send({ ok: true, message: 'Welcome to Mikrotik RouterOS API' });
});
router.get('/version', (req, res, next) => {
    res.send({ ok: true, version: 'v1.1.0', build: '20200510' });
});

module.exports = router;