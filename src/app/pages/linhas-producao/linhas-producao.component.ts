import { Component, OnInit } from '@angular/core';
import { LinhaProducao } from 'src/app/models/linhaproducao/linhaproducao';
import { Maquina } from 'src/app/models/maquina/maquina';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MaquinaService } from 'src/app/services/maquina.service';
import { LinhaProducaoService } from 'src/app/services/linha-producao.service';

@Component({
  selector: 'linhas-producao',
  templateUrl: './linhas-producao.component.html',
  styleUrls: ['./linhas-producao.component.scss']
})
export class LinhasProducaoComponent implements OnInit {
  linhasProducao: LinhaProducao[] = [];
  active: boolean;
  listaMaquinas: Maquina[] = [];
  lpObject = new LinhaProducao();

  constructor(private maquinaService: MaquinaService, private linhaProducaoService: LinhaProducaoService) { }


  ngOnInit() {

    this.getLinhasProducao();

    // this.linhasProducao =
    // [
    //   {
    //     linhaProducaoId: 1,
    //     name: "linhaProdução - 1",
    //     maquinas: [
    //       {
    //         maquinaId: 1,
    //         name: "Furadora",
    //         tipoMaquinaId: 1,
    //       },
    //       {
    //         maquinaId: 2,
    //         name: "Apertadora",
    //         tipoMaquinaId: 1,
    //       },
    //       {
    //         maquinaId: 3,
    //         name: "Afuniladora",
    //         tipoMaquinaId: 1,
    //       }
    //     ],
    //   },
    // ];

  }

  addLinhaProducao() {
    this.maquinaService.getAllMaquinas().subscribe((mlist) => {
      this.listaMaquinas = mlist;
    });
    this.active = !this.active;
  }


  getLinhasProducao(){
    this.linhaProducaoService.getAllLinhasProducoes().subscribe((lplist) => {
      this.linhasProducao = lplist;
      console.log(this.linhasProducao);
    });
}

  linhaUpdate() {
    this.linhaProducaoService.postLinhaProducao(this.lpObject).subscribe((lp) => {
      this.linhasProducao.push(lp);
      this.getLinhasProducao();
    });
    this.active = false;
  }

  drop(event: CdkDragDrop<string[]>, index: number) {
    moveItemInArray(this.linhasProducao[index].maquinas, event.previousIndex, event.currentIndex);
    // this.linhasProducao[index].maquinas.forEach((m, i) => m.posicaoLinha = i + 1);
  }



}
