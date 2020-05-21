var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/:id', async (req, res) => {
    const students = await db.query('SELECT * FROM students where id = $1',[req.params.id])
    res.json(students.rows[0].grade);
});

router.post('/', async (req, res) => {
    let result = await db.query('update students set grade = $1 where id=$2 returning *', [req.body.grade, req.body.id])
    res.json(result)
})

module.exports = router;