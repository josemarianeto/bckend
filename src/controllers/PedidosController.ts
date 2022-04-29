import { Request, Response } from "express";
import { Iitens, IPedidos } from "../modules/interfaces/Pedidos.interface";
import { PedidosRepository } from "../repositories/PedidosRepository";
import validator from "validator"
import { cpf as validatorCPF } from 'cpf-cnpj-validator';

export const isCEP = (cep: any) => (/^[0-9]{8}$/).test(cep);

export class PedidosController {


    async addPedido(req: Request, res: Response) {
        try {
            const { nome, cep, cpf, frete, valorTotal, email, Itens } = req.body;
            const ListaItens: Iitens[] = [];
            const _pedidoRepository = new PedidosRepository();
            if (!Itens || Itens.length === 0) {
                throw new Error("Itens não informados");
            }
            Itens.forEach((item: Iitens) => {
                ListaItens.push(item);
            });

            if (!validator.isEmail(email)) {
                throw new Error("Email inválido");
            }

            if (!isCEP(cep)) {
                throw new Error("CEP inválido");
            }

            if (!validatorCPF.isValid(cpf)) {
                throw new Error("CPF inválido");
            }

            const result = await _pedidoRepository.createPedido({
                nome,
                cep,
                cpf,
                frete,
                valorTotal,
                email,
                ListaItens
            });
            return res.json(result);

        } catch (err: any) {
            res.status(500).send({ error: err.message });
        }

    }

    async getAllPedidos(req: Request, res: Response) {
        const _pedidoRepository = new PedidosRepository();
        const pedidos = await _pedidoRepository.getAllPedidos();
        return res.json(pedidos);
    }

    async putPedido(req: Request, res: Response) {
        try {
            const { nome, cep, cpf, frete, valorTotal, email, Itens } = req.body;
            const { id } = req.params;

            const ListaItens: Iitens[] = [];
            const _pedidoRepository = new PedidosRepository();


            if (!validator.isEmail(email)) {
                throw new Error("Email inválido");
            }

            if (!isCEP(cep)) {
                throw new Error("CEP inválido");
            }

            if (!validatorCPF.isValid(cpf)) {
                throw new Error("CPF inválido");
            }

            const idPedido = parseInt(id);

            const result = await _pedidoRepository.updatePedido({
                idPedido: idPedido,
                nome: nome,
                cep: cep,
                cpf: cpf,
                frete: frete,
                valorTotal: valorTotal,
                email: email,
                ListaItens
            });
            return res.json(result);

        } catch (err: any) {
            res.status(500).send({ error: err.message });
        }
    }

    async deletePedido(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const _pedidoRepository = new PedidosRepository();

            await _pedidoRepository.deletePedido(parseInt(id));
            return res.json({ message: "Pedido deletado com sucesso" });
        } catch (err: any) {
            res.status(404).send({ message: "Pedido Não Encontrado" });
        }

    }

    async getPedidoById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const _pedidoRepository = new PedidosRepository();
            const pedido = await _pedidoRepository.getPedidoById(parseInt(id));
            return res.json(pedido);
        }
        catch (err: any) {
            res.status(404).send({ message: "Pedido Não Encontrado" });
        }
    }
} 