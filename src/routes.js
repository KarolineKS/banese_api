const express = require('express');
const router = express.Router();
const userController = require('./controllers/users');

router.get('/users', userController.getAll);
router.post('/users/login', userController.login);
router.put('/users/password', userController.updatePasswordNumber);

router.get('/', (req, res) => {
  res.send('API rodando...');
});

module.exports = router;
