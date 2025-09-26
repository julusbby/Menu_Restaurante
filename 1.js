//agregar producto

let productos = []
function agregarProducto(idproducto, nombre, precio, categoria) {
    let producto = {
    idProducto: idproducto,
    nombre: nombre,
    precio: precio,
    categoria: categoria,
}
productos.push(producto)
console.log("producto agregado: ", producto)
}

//listar todos los productos
function listarProducto() {
    productos.forEach(productos => console.log(productos))
    console.log("lista de producto: ", productos) 
}




agregarProducto(1, "hamburguesa", 15000, "comida rapida")
agregarProducto(2, "pasta", 20000, "comida")
listarProducto()





