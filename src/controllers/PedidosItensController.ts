import exp from "constants";
import { Request, Response } from "express";
import { Iitens, IPedidos } from "../modules/interfaces/Pedidos.interface";
import { PedidosItensRepository } from "../repositories/PedidosItensRepository";

export class PedidosItensController {



    async addItens(req: Request, res: Response) {
        try {
            const { sku, descricao, valor, quantidade } = req.body;
            const { pedidoId } = req.params;
            const id = parseInt(pedidoId);
            if (!sku) {
                throw new Error("SKU não informado");
            }
            if (!descricao) {
                throw new Error("Descrição não informada");
            }
            if (!valor) {
                throw new Error("Valor não informado");
            }
            if (!quantidade) {
                throw new Error("Quantidade não informada");
            }
            if (!id) {
                throw new Error("Pedido não informado");
            }
            const _pedidosItensRepository = new PedidosItensRepository();
            const itens = await _pedidosItensRepository.addItens({
                sku: sku,
                descricao: descricao,
                valor: valor,
                quantidade: quantidade
            }, id);
            return res.json(itens);
        } catch (err: any) {
            res.status(500).send({ error: err.message });
        }
    }


    async getAllItens(req: Request, res: Response) {
        const { pedidoId } = req.params;
        try {
            if (!pedidoId) {
                throw new Error("Pedido não informado");
            }
            const _pedidosItensRepository = new PedidosItensRepository();
            const itens = await _pedidosItensRepository.getAllItens(parseInt(pedidoId));
            return res.json(itens);
        }
        catch (err: any) {
            res.status(404).send({ message: "itens não encontrado" });
        }
    }

    async getItemById(req: Request, res: Response) {
        const { idItem } = req.params;

        try {
            if (!idItem) {
                throw new Error("Item não informado");
            }
            const _pedidosItensRepository = new PedidosItensRepository();
            const itens = await _pedidosItensRepository.getItensById(parseInt(idItem));
            return res.json(itens);
        }
        catch (err: any) {
            res.status(404).send({ message: "item não encontrado" });
        }
    }

    async putItem(req: Request, res: Response) {
        try {
            const { sku, descricao, valor, quantidade } = req.body;
            const { idItem } = req.params;
            const id = parseInt(idItem);
            if (!sku) {
                throw new Error("SKU não informado");
            }
            if (!descricao) {
                throw new Error("Descrição não informada");
            }
            if (!valor) {
                throw new Error("Valor não informado");
            }
            if (!quantidade) {
                throw new Error("Quantidade não informada");
            }
            if (!idItem) {
                throw new Error("Item não informado");
            }
            const _pedidosItensRepository = new PedidosItensRepository();
            const itens = await _pedidosItensRepository.updateItembyID({
                sku: sku,
                descricao: descricao,
                valor: valor,
                quantidade: quantidade,
                idItem: id,
            });
            return res.json(itens);
        } catch (err: any) {
            res.status(500).send({ error: err.message });
        }
    }

    async deleteItens(req: Request, res: Response) {
        try {
            const { idItem } = req.params;
            if (!idItem) {
                throw new Error("Item não informado");
            }
            const _pedidosItensRepository = new PedidosItensRepository();
            await _pedidosItensRepository.removeItens(parseInt(idItem));
            return res.json({ message: "Item removido com sucesso" });
        }
        catch (err: any) {
            res.status(404).send({ message: "item não encontrado" });
        }
    }
}