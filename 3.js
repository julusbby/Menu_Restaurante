

const pedidos = [
  { estado: "pendiente", total: 30000 },
  { estado: "preparando", total: 10000 },
  { estado: "entregado", total: 20000 }
]
 
function mostrarReportes(pedidos) {
  let pendientes = 0
  let preparando = 0
  let entregados = 0
  let totalVentas = 0
 
  pedidos.forEach(pedido => {
    if (pedido.estado == "pendiente") {
      pendientes++
    } else if (pedido.estado == "preparando") {
      preparando++
    } else if (pedido.estado == "entregado") {
      entregados++
      totalVentas += pedido.total;
    }
  })
 
  console.log("Pedidos por estado:");
  console.log("Pendientes:", pendientes)
  console.log("Preparando:", preparando)
  console.log("Entregados:", entregados)
  console.log("Total ventas:", totalVentas)
}
 
mostrarReportes(pedidos)



