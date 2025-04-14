function mostrarVista(tipo) {
    let url = tipo === 'clientes' ? '/vista-clientes' : '/vista-productos';
  
    fetch(url)
      .then(res => res.text())
      .then(html => {
        document.getElementById('contenido').innerHTML = html;
      })
      .catch(err => console.error('Error al cargar la vista:', err));
  }
  