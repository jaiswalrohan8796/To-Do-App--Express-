const express = require('express');
const router = express.Router();
const addWork = require('./add-work');

router.get('/',(req,res,next)=>{
    res.render('works',{ works:addWork.workList, pageTitle: 'To Do App'});
});

module.exports = router;