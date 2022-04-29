import { IPedidos, Iitens } from '../modules/interfaces/Pedidos.interface';
import { prisma } from '../database/prismaClient';

export class PedidosRepository {

    async createPedido({ nome, cep, cpf, frete, valorTotal, email, ListaItens }: IPedidos) {

        const pedido = await prisma.pedido.create({
            data: {
                nome: nome,
                cep: cep,
                cpf: cpf,
                frete: frete,
                valorTotal: valorTotal,
                email: email,
                Itens: {
                    create: ListaItens
                }
            }
        });

        return pedido;
    }

    async getAllPedidos() {
        const pedidos = await prisma.pedido.findMany({
            include: {
                Itens: true
            }
        });
        return pedidos;
    }

    async getPedidoById(id: number) {
        const pedido = await prisma.pedido.findUnique({
            where: {
                idPedido: id
            },
            include: {
                Itens: true
            }
        });
        return pedido;
    }

    async updatePedido({ idPedido, nome, cep, cpf, frete, valorTotal, email }: IPedidos) {
        const pedido = await prisma.pedido.update({
            where: {
                idPedido: idPedido
            },  
            data: {
                nome: nome,
                cep: cep,
                cpf: cpf,
                frete: frete,
                valorTotal: valorTotal,
                email: email
            }
        });
        return pedido;
    }

    async deletePedido(id: number) {
        const pedido = await prisma.pedido.delete({
            where: {
                idPedido: id
            }, include: {
                Itens: true
            }
        });
        return pedido;
    }
}