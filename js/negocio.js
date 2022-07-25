 //Funcion Comprar instrumentos//

 const producto = [
     { nombre: `Taylor`, precio: 550 },
     { nombre: `Fender`, precio: 600 },
     { nombre: `Gibson`, precio: 650 },
     { nombre: `Fender jazzbass`, precio: 700 },

 ];
 const carrito = [];

 function agregarGuitarra(index) {
     carrito.push({...producto[index] })
     actualizarContador();
 }


 function agregar0() {
     agregarGuitarra(0);
 }

 function agregar1() {
     agregarGuitarra(1);
 }

 function agregar2() {
     agregarGuitarra(2);
 }

 function agregar3() {
     agregarGuitarra(3);
 }



 // Funcion carrito//
 function comprarGuitarras() {
     console.log(carrito)
     localStorage.setItem("carrito", JSON.stringify(carrito))

 }

 //Actualizar contador de compras//

 const contador = document.getElementById('contador');


 function actualizarContador() {
     const total = carrito.length;

     contador.innerHTML = total;
 }