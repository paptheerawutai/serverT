const express = require('express');
const routes =  express.Router();

//import controllers
const { create } = require('../controllers/person')
//@route  localhost/api/person
//@methon GET
//@access Publish
routes.post('/person',create)

module.exports = routes;


