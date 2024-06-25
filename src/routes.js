const express = require('express');
const router = express.Router();

// const { getAll } = require('./controllers/users');

// router.get('/users', getAll);

router.get('/', (req, res) => {
  res.send('Api rodando...');
});

module.exports = router;