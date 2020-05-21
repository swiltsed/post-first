var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/', async (req, res) => {
    let query
    let students
    if(req.query.name){
        query = `select * from students where name like '%${req.query.name}%'`
    }
    else{
        query = 'SELECT * FROM students'
    }
    try {
        students = await db.query(query)
    } catch (error) {
        return res.json(error)
    }
    res.json(students.rows);
});

router.get('/:id', async (req, res) => {
    const students = await db.query('SELECT * FROM students where id = $1',[req.params.id])
    res.json(students.rows);
});

module.exports = router;
