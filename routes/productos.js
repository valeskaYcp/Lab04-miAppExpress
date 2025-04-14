const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const productos = ['Laptop', 'Smartphone', 'Audífonos'];
  res.render('productos', { productos });
});

module.exports = router;
