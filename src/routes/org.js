const express = require('express');
const routes =  express.Router();

//@route  localhost/api/person
//@methon GET
//@access Publish
routes.get('/org',(req,res)=>{
    res.send('Hello org')
})

module.exports = routes;