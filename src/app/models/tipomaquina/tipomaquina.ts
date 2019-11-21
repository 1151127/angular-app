import { Operacao } from "../operacao/operacao";

export class TipoMaquina {
    tipoMaquinaId: number;
    name: string;
    desc: string;
    listOperacoes: Operacao[];
}