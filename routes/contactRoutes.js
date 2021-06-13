const express = require('express');
const router = express.Router();
// const dotenv = require('dotenv');

const mysql = require('mysql');



let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

connection.connect();

router.get('/', (req, res) => {
    let result = connection.query('SELECT * from contact',
        function (err, rows, fields) {
            let asjson = [];
            var s = "";
            for (var i = 0; i < rows.length; i++) {
                asjson.push({ 'name': rows[i].name, 'surname': rows[i].surname });
            }
            res.end(JSON.stringify(asjson));
        }
    );
});

router.get('/:id(\\d+)', (req, res) => {
    res.send('contacts with id ' + req.params.id)
});

router.post('/', (req, res) => {
    res.send('POSTcontacts')
});
module.exports = router;