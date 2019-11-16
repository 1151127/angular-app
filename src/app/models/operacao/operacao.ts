import { TipoMaquina } from "../tipomaquina/tipomaquina";

export class Operacao {
    operacaoId: number;
    name: string;
    desc: string;
    tiposMaquinas: TipoMaquina[];
}