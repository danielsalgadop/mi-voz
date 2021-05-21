const express = require('express');
const router = express.Router();

router.get('/',(req, res) =>{
    res.send('contacts')
});

router.post('/',(req, res) =>{
    res.send('POSTcontacts')
});
module.exports = router;