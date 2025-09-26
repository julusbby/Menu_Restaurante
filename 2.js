
//almacenar productos
let productos = []

//agregar productos
function agregarProducto(id, nombre, precio, categoria) {
    let producto = {
        id: id,
        nombre: nombre,
        precio: precio,
        categoria: categoria,
    };
    productos.push(producto);
}

// Crear pedido
let pedidos = []

function CrearPedido(idPedido, nombreCliente, items, estado) {
    let total = 0
    items.forEach(item => {
        total += item.precio
    });

    let pedido = {
        idPedido: idPedido,
        nombreCliente: nombreCliente,
        items: items,
        total: total,
        estado: estado,
    };
    pedidos.push(pedido);
    console.log("pedido creado: ", pedido)
}

// Listar pedidos
function listarPedidos() {
    pedidos.forEach(pedido => console.log(pedido))
    console.log("lista de pedidos: ", pedidos)
}
function listarProductos() {
    productos.forEach(producto => console.log(producto))
    console.log("lista de productos: ", productos)
}
agregarProducto(1, "hamburguesa", 15000, "comida rapida")
agregarProducto(2, "pasta", 20000, "comida")

let productosPedido = [productos[0], productos[1]]
CrearPedido(1, "Juan", productosPedido, "pendiente")

listarProductos()
listarPedidos()

//filtrar pedido por estado
function filtrarPedidosPorEstado(estado) {
    let pedidosFiltrados = pedidos.filter(pedido => pedido.estado == estado)
    return pedidosFiltrados;
}

let pedidosPendientes = filtrarPedidosPorEstado("pendiente")
console.log("Pedidos pendientes:", pedidosPendientes)



