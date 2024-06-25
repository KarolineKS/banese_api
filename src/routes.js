const express = require('express');
const router = express.Router();

const { getAll, login, updatePasswordNumber } = require('./controllers/users');

router.get('/users', getAll);
router.post('/users/login', login);
router.put('/users/password', updatePasswordNumber);

router.get('/', (req, res) => {
  res.send('Api rodando...');
});

module.exports = router;