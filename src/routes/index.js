const express = require("express");
const router = express.Router();
const ctrSql = require('../controllers/ctrlSql')

router.get('/api/sportbridge/', async (req,res) => {

    const data = await ctrSql.getAllProduct()

    res.status(200).json(data)
   

  });

  router.get('/api/sportbridge/', async (req,res) => {

    const data = await ctrSql.getAllProduct(a,b,c)

    res.status(200).json(data)
   

  });


  router.get('/api/sportbridgee/', async (req,res) => {

    const data = await ctrSql.getProductByType(req.query.fab,req.query.tipe)

    res.status(200).json(data)
   

  });






  module.exports = router; 