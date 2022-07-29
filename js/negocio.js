 //Funcion Comprar instrumentos//

 const producto = [
     { nombre: `Taylor`, precio: 550 },
     { nombre: `Fender`, precio: 600 },
     { nombre: `Gibson`, precio: 650 },
     { nombre: `Fender jazzbass`, precio: 700 },

 ];
 const carrito = [];
 // Spread //
 function agregarGuitarra(index) {
     carrito.push({...producto[index] })
     actualizarContador();
 }


 function agregar0() {
     agregarGuitarra(0);

     sweety0();

 }

 function agregar1() {
     agregarGuitarra(1);
     sweety1();
 }

 function agregar2() {
     agregarGuitarra(2);
     sweety2();
 }

 function agregar3() {
     agregarGuitarra(3);
     sweety3();
 }



 // Funcion carrito//
 function comprarGuitarras() {
     console.log(carrito)
     localStorage.setItem("carrito", JSON.stringify(carrito))

 }
 // Sweet Alert //
 function manejeElClick() {
     Swal.fire({
         title: 'Has terminado tu compra!',
         text: 'Queres terminar tu compra?',
         icon: 'success',
         confirmButtonText: 'Aceptar',
     });
 }

 function sweety0() {
     Swal.fire({
         title: 'Has agregado una guitarra Taylor!',
         icon: 'success',
         confirmButtonText: 'Aceptar',
     });
 }

 function sweety1() {
     Swal.fire({
         title: 'Has agregado una guitarra Fender!',
         icon: 'success',
         confirmButtonText: 'Aceptar',
     });
 }

 function sweety2() {
     Swal.fire({
         title: 'Has agregado una guitarra Gibson!',
         icon: 'success',
         confirmButtonText: 'Aceptar',
     });
 }

 function sweety3() {
     Swal.fire({
         title: 'Has agregado un bajo Fender!',
         icon: 'success',
         confirmButtonText: 'Aceptar',
     });
 }

 //Actualizar contador de compras//

 const contador = document.getElementById('contador');


 function actualizarContador() {
     const total = carrito.length;

     contador.innerHTML = total;
 }