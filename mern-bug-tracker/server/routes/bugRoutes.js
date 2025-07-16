const express = require('express');
const router = express.Router();

const bugs = []; // temporary in-memory store

// POST /api/bugs
router.post('/', (req, res) => {
  const { title, description } = req.body;
  const newBug = { id: bugs.length + 1, title, description };
  bugs.push(newBug);
  res.status(201).json(newBug);
});

// GET /api/bugs
router.get('/', (req, res) => {
  res.status(200).json(bugs);
});

module.exports = router;
