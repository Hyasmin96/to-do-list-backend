var express = require('express');
var router = express.Router();
var connection = require('../config/db');
// GET
router.get('/getTasks', async function(req, res) {
    try {
        const [results] = await connection.query('SELECT * FROM tasks');
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST
router.post('/addTask', async function(req, res) {
    try {
        if (req.body && req.body.name && req.body.description && req.body.dueDate) {

            const sql = `
                INSERT INTO tasks (name, description, dueDate)
                VALUES (?, ?, ?)
            `;

            const [results] = await connection.query(sql, [
                req.body.name,
                req.body.description,
                req.body.dueDate
            ]);

            res.status(200).json(results);

        } else {
            res.status(400).json({ error: "Missing fields" });
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE
router.delete('/removeTask/:id', async function(req, res) {
    try {
        if (req.params && req.params.id) {

            const [results] = await connection.query(
                'DELETE FROM tasks WHERE id = ?',
                [req.params.id]
            );

            res.status(200).json(results);

        } else {
            res.status(400).json({ error: "Missing ID" });
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;