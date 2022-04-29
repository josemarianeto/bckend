-- DropForeignKey
ALTER TABLE "Itens" DROP CONSTRAINT "Itens_pedidoId_fkey";

-- AddForeignKey
ALTER TABLE "Itens" ADD CONSTRAINT "Itens_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("idPedido") ON DELETE CASCADE ON UPDATE CASCADE;
