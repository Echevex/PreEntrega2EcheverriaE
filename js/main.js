//////////////////////Objeto Y Sus Funciones/////////////////////////

let pais = ""
while (pais === "" || Number(pais)){
    pais = prompt("Escribe de que pais nos estas visitando");
    if (pais === ""){
        alert("Debes escribir un pais para avanzar");
    }
}

console.log(`Estamos siendo visitados por ${pais}`);

const productosDisponibles = ["Chocolate", "Gomitas", "Caramelos", "Picodulce", "Papitas"];

const productos = {
    Chocolate: 25,
    Gomitas: 15,
    Caramelos: 5,
    PicoDulce: 12,
    Papitas: 21,
}
 
function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

function agregarProducto(producto, cantidad) {
    if (productosDisponibles.includes(producto)) {
        const precio = productos[producto];
        const subtotal = calcularSubtotal(precio, cantidad);
        return subtotal;
    } else {
        console.log(`El producto "${producto}" no está disponible.`);
        return 0;
    }
}


function calcularCarrito(carrito) {
    let total = 0;
    carrito.forEach(item => {
        total += item.subtotal;
    });
    return total;
}



/////////////////////////Main/////////////////////////////////

function comercio() {
    const carrito = [];

    // Permitimos al usuario agregar productos al carrito hasta que ingrese "fin"
    let producto;
    while (producto !== "fin") {
        producto = prompt("Seleccione el producto que desea comprar:\nChocolate $25. \nGomitas $15. \nCaramelos $5. \nPicodulce $12. \nPapitas $21. \nO ingrese fin para terminar de comprar ");

        // Validamos si el producto ingresado es válido
        if (producto !== "fin") {
            if (!productosDisponibles.includes(producto)) {
                alert("El producto ingresado no es válido. Por favor, elige uno de los productos disponibles.");
                continue; // Vuelve al inicio del bucle sin ejecutar el resto del código
            }

            const cantidad = parseInt(prompt("Escribe la cantidad que desea comprar:"));
            const subtotal = agregarProducto(producto, cantidad);
            if (subtotal > 0) {
                carrito.push({ producto, cantidad, subtotal });
            }
        }
    }

    // Resultados en la consola
    console.log("Productos en el carrito:");
    carrito.forEach(item => {
        console.log(`${item.cantidad} ${item.producto}(s) - Subtotal: $${item.subtotal.toFixed(2)}`);
    });
    console.log("Gasto Total: ", calcularCarrito(carrito));

   
}

  comercio();