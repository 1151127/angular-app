import { OperacaoTipoMaquina } from '../operacaotipomaquina/operacaotipomaquina';

export class Operacao {
    operacaoId: number;
    name: string;
    desc: string;
    duracao: string;
    operacoesTiposMaquinas: OperacaoTipoMaquina[];

    constructor(){
        this.operacoesTiposMaquinas = [];
}
}