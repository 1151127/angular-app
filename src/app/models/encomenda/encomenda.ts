import { Utilizador } from '../utilizador/utilizador';

export class Encomenda {
    _id: string;
    produtoId: number;
    quantidade: number;
    dataCriacaoEncomenda: Date;
    dataEntregaEncomenda: Date;
    estadoBloqueado: boolean;
    cliente: string;
    precoTotal: number;
}