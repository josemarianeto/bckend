
import { Router } from "express";
import { PedidosController } from "../controllers/PedidosController";
import { PedidosItensController } from "../controllers/PedidosItensController";

const routes = Router();
const pedidosController = new PedidosController();
const pedidosItensController = new PedidosItensController();

//------- Pedidos
routes.post("/pedidos", pedidosController.addPedido);
routes.get("/pedidos", pedidosController.getAllPedidos);
routes.get("/pedidos/:id", pedidosController.getPedidoById);
routes.put("/pedidos/:id", pedidosController.putPedido);
routes.delete("/pedidos/:id", pedidosController.deletePedido);

//------- PedidosItens
routes.get("/pedidos/:pedidoId/itens", pedidosItensController.getAllItens);
routes.get("/pedidos/itens/:idItem", pedidosItensController.getItemById);
routes.post("/pedidos/:pedidoId/itens", pedidosItensController.addItens);
routes.put("/pedidos/itens/:idItem", pedidosItensController.putItem);
routes.delete("/pedidos/itens/:idItem", pedidosItensController.deleteItens);

export { routes }