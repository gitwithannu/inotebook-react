const express = require('express');
const Banner = require('../models/Banner' )
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");

router.get('/fetchallbanners',  async (req, res) => {
  //   console.log('test the api');
    const BannerResult = await Banner.find({
       
     });
     res.json(BannerResult); 
})


module.exports = router
