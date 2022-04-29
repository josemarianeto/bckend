export interface IPedidos {
    idPedido?: number;
    nome: string;
    email: string;
    cpf: string;
    cep: string;
    frete: number;
    valorTotal: number;
    ListaItens: Iitens[];
}
export interface Iitens {
    idItem?: number;
    sku: string;
    descricao: string;
    valor: number;
    quantidade: number;
    pedidoId?: number;
}



