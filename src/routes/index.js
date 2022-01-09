const express = require("express");
const router = express.Router();
const ctrSql = require('../controllers/ctrlSql')

router.get('/api/sportbridge/', async (req, res) => {

  if (req.query.fab && req.query.type) {

    const data = await ctrSql.getProductByType(req.query.fab,req.query.type)
    res.status(200).json(data)

  } else if (req.query.fab) {

    const data = await ctrSql.getProductByFab(req.query.fab)
    res.status(200).json(data)

  } else if (req.query.name) {

    const data = await ctrSql.getProductByName(req.query.name)
    res.status(200).json(data)

  }  else {
    const data = await ctrSql.getAllProduct()
    res.status(200).json(data)

  }



});



module.exports = router; 