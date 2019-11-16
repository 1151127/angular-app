import { Maquina } from "../maquina/maquina";

export class LinhaProducao{
    // os id? 
    linhaProducaoId: number;
    name: string;
    maquinas: Maquina[];
    
    constructor() {
        this.maquinas  = [];
     }
}

