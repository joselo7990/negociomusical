  const productos = [
      { nombre: `Taylor`, precio: 550, imagen: '../imagenes/taylor1.jpg' },
      { nombre: `Fender`, precio: 600, imagen: '../imagenes/stratocaster2.jpg' },
      { nombre: `Gibson`, precio: 650, imagen: '../imagenes/explorer3.jpg' },
      { nombre: `Fender jazzbass`, precio: 700, imagen: '../imagenes/jazzbass4.jpg' },

  ];

  var foto$ = []
  for (let i = 0; i < productos.length; i++) {
      const card = document.createElement('div');
      card.classList.add('card')
      card.classList.add('col')

      card.innerHTML = `<img class="card-img-top" src="${productos[i].imagen}">
                                    <div class="card-body">
                                        <h5 class="card-title">${productos[i].nombre}</h5>
                                        <p class="card-text">$ ${productos[i].precio}</p>
                                        <button onclick="agregar${i}()" class="btn btn-primary">Comprar</button>
                                      
                                    </div>`
      document.getElementById('cont').append(card)
  }