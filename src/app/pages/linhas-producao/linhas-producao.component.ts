import { Component, OnInit } from '@angular/core';
import { LinhaProducao } from 'src/app/models/linhaproducao/linhaproducao';
import { Maquina } from 'src/app/models/maquina/maquina';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'linhas-producao',
  templateUrl: './linhas-producao.component.html',
  styleUrls: ['./linhas-producao.component.scss']
})
export class LinhasProducaoComponent implements OnInit {
  linhasProducao: LinhaProducao[] = [];
  listaMaquinas: Maquina[] = [];
  lp: LinhaProducao; 
  active: boolean;

  constructor() { }




  ngOnInit() {

    this.linhasProducao =
    [
      {
        linhaProducaoId: 1,
        name: "linhaProdução - 1",
        maquinas: [
          {
            maquinaId: 1,
            name: "Furadora",
            tipoMaquinaId: 1,
            posicaoLinha: 1,
          },
          {
            maquinaId: 2,
            name: "Apertadora",
            tipoMaquinaId: 1,
            posicaoLinha: 2,
          },
          {
            maquinaId: 3,
            name: "Afuniladora",
            tipoMaquinaId: 1,
            posicaoLinha: 3,
          }
        ],
      },
    ];

    this.listaMaquinas =
    [
      {
        maquinaId: 1,
        name: "Furadora",
        tipoMaquinaId: 1,
        posicaoLinha: 1,
      },
      {
        maquinaId: 2,
        name: "Furadora",
        tipoMaquinaId: 1,
        posicaoLinha: 2,
      },
      {
        maquinaId: 3,
        name: "Furadora",
        tipoMaquinaId: 1,
        posicaoLinha: 3,
      }
    ];
  }

addLinhaProducao(){   
    this.linhasProducao.push(this.lp);
    this.active = true;
}


drop(event: CdkDragDrop<string[]>, index: number) {
  moveItemInArray( this.linhasProducao[index].maquinas, event.previousIndex, event.currentIndex);
  this.linhasProducao[index].maquinas.forEach((m, i) => m.posicaoLinha = i + 1);
}



}
