const express = require('express');
const app = express();
const port = 9000;

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/vista-clientes', (req, res) => {
  const clientes = ['Valeska', 'Carlos', 'Lucía'];
  res.render('clientes', { clientes });
});

app.get('/vista-productos', (req, res) => {
  const productos = ['Laptop', 'Smartphone', 'Audífonos'];
  res.render('productos', { productos });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
