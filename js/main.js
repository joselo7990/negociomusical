//
/*fetch('./data.json')
.then(response => response.json())
.then(data => {
    productos = data;
    mostrarGuitarras()
})
.catch( e => console.log(e))
*/

fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        productos = data;
        mostrarGuitarras()
    })
    .catch(e => console.log(e))

let productos = [];
const foto$ = [];

function mostrarGuitarras() {

    for (let i = 0; i < productos.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card')
        card.classList.add('col-12', 'col-md-6', 'col-lg-3')


        card.innerHTML = `<img class="card-img-top" src="${productos[i].imagen}">
                                    <div class="card-body">
                                        <h5 class="card-title">${productos[i].nombre}</h5>
                                        <p class="card-text">$ ${productos[i].precio}</p>
                                        <button onclick="agregar${i}()" class="btn btn-primary">Comprar</button>
                                      
                                    </div>`
        document.getElementById('cont').append(card)
    }
}

function clickEnProducto(id) {
    alert('click en ' + id);
}










/*fetch('./data.json')
    .then((resinicial) => resinicial.json())
    .then((res) => {
        const miArray = res;
        let htmlAux = '';
        for (let i = 0; i < miArray.length; i++) {
            htmlAux =
                htmlAux +
                `<div onclick="clickEnProducto(${miArray[i].id})">
              <h3>${miArray[i].name}</h3>            
              <p>${miArray[i].price}</p>            
          </div>`;
        }
        document.getElementById('listadoDeProductos').innerHTML = htmlAux;
        console.log(htmlAux);
    })
    .catch((e) => {
        console.log(e);
    });*/