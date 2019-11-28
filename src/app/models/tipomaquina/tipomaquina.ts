import { OperacaoTipoMaquina } from '../operacaotipomaquina/operacaotipomaquina';

export class TipoMaquina {
    tipoMaquinaId: number;
    name: string;
    desc: string;
    operacoesTiposMaquinas: OperacaoTipoMaquina[];

    constructor(){
        this.operacoesTiposMaquinas = [];
    }
}