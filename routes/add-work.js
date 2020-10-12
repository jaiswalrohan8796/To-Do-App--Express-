const express = require('express');
const router = express.Router();
 
const works = [];
router.get('/add-work',(req,res,next)=>{
    res.render('add-work');
});

router.post('/add-work',(req,res,next)=>{
    works.push(req.body);
    res.redirect('/');
});

exports.routes = router;
exports.workList = works;