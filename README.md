En el archivo HTML, creé una estructura básica con una imagen dentro de un contenedor <div> y enlscé los archivos CSS y JavaScript.
En el archivo CSS, referencio algunos estilos básicos a la imagen y al contenedor.
En el archivo JavaScript, obtengo la referencia a la imagen usando document.getElementById y luego agrego un evento de clic (click) a la imagen.
La función toggleBorder es llamada cada vez que se hace clic en la imagen. 
Dentro de esta función: 
    Si isBorderActive es false, se agrega un borde rojo de 3px alrededor de la imagen y cambio isBorderActive a true.
    Si isBorderActive es true, quito el borde (seteando border a none) y cambio isBorderActive a false.
Cuando hagas clic en la imagen, se alternará entre tener y no tener un borde rojo de 3px alrededor de ella.
