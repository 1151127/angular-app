import { Operacao } from "../operacao/operacao";

export class PlanoFabrico {
    planoFabricoId: number;
    name: string;
    desc: string;
    operacoes: Operacao[];
}