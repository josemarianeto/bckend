-- CreateTable
CREATE TABLE "Pedido" (
    "idPedido" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "frete" DOUBLE PRECISION NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("idPedido")
);

-- CreateTable
CREATE TABLE "Itens" (
    "id" SERIAL NOT NULL,
    "sku" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "quantidade" DOUBLE PRECISION NOT NULL,
    "pedidoId" INTEGER NOT NULL,

    CONSTRAINT "Itens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Itens" ADD CONSTRAINT "Itens_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("idPedido") ON DELETE RESTRICT ON UPDATE CASCADE;
