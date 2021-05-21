const express = require('express');
const router = express.Router();

router.get('/',(req, res) =>{
    res.send('contacts')
});

router.get('/:id(\\d+)',(req, res) =>{
    res.send('contacts with id '+req.params.id)
});

router.post('/',(req, res) =>{
    res.send('POSTcontacts')
});
module.exports = router;