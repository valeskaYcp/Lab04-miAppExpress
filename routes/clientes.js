const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const clientes = ['Valeska', 'Carlos', 'Lucía'];
  res.render('clientes', { clientes });
});

module.exports = router;
