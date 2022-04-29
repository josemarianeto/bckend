import { IPedidos, Iitens } from '../modules/interfaces/Pedidos.interface';
import { prisma } from '../database/prismaClient';


export class PedidosItensRepository {


    async addItens({ sku, descricao, valor, quantidade }: Iitens, pedidoId: number) {

        const itens = await prisma.itens.create({
            data: {
                sku: sku,
                descricao: descricao,
                valor: valor,
                quantidade: quantidade,
                pedidoId: pedidoId
            }
        });
        return itens;
    }

    async removeItens(id: number) {
        const itens = await prisma.itens.delete({
            where: {
                idItem: id
            }
        });
        return itens;
    }

    async updateItembyID({ idItem, sku, descricao, valor, quantidade }: Iitens) {
        const itens = await prisma.itens.update({
            where: {
                idItem: idItem
            },
            data: {
                sku: sku,
                descricao: descricao,
                valor: valor,
                quantidade: quantidade,
            }
        });
        return itens;
    }

    async getAllItens(idPedido: number) {
        const itens = await prisma.itens.findMany({
            where: {
                pedidoId: idPedido
            }
        });
        return itens;
    }

    async getItensById(id: number) {
        const itens = await prisma.itens.findUnique({
            where: {
                idItem: id
            }
        });
        return itens;
    }
}