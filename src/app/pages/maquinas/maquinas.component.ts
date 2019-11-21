import { Component, OnInit } from '@angular/core';
import { MaquinaService } from 'src/app/services/maquina.service';
import { Maquina } from 'src/app/models/maquina/maquina';
import { TipoMaquinaService } from 'src/app/services/tipo-maquina.service';
import { TipoMaquina } from 'src/app/models/tipomaquina/tipomaquina';
import { OperacaoService } from 'src/app/services/operacao.service';
import { Operacao } from 'src/app/models/operacao/operacao';


@Component({
  selector: 'maquinas',
  templateUrl: './maquinas.component.html',
  styleUrls: ['./maquinas.component.scss']
})
export class MaquinasComponent implements OnInit {
  activeM: boolean;
  activeTM: boolean;
  maquinas: Maquina[] = [];
  tiposmaquinas: TipoMaquina[] = [];
  operacoes: Operacao[] = [];
  displayedColumnsM: string[] = ['nomeM','tipoM'];
  displayedColumnsTM: string[] = ['nomeTM', 'descTM', 'listOp'];


  mObject = new Maquina();
  tpObject = new TipoMaquina();

  constructor(private maquinaService: MaquinaService, private tipoMaquinaService: TipoMaquinaService, private operacaoService: OperacaoService) { }

  ngOnInit() {

    this.getMaquinas();
    this.getTipoMaquina();

    this.operacaoService.getAllOperacoesMaquinas().subscribe((oplist)=>{
      this.operacoes = oplist;
    });
  }

  getMaquinas(){
    this.maquinaService.getAllMaquinas().subscribe((mlist)=>{
      this.maquinas = mlist;
    });
  }


  getTipoMaquina(){
    this.tipoMaquinaService.getAllTiposMaquinas().subscribe((tmlist)=>{
      this.tiposmaquinas = tmlist;
    });
  }

  addMaquina(){
    this.activeM = true;
}

createMaquina(){
  this.maquinaService.postMaquina(this.mObject).subscribe((m) => {
    this.maquinas.push(m);
    this.getMaquinas();
  });
   this.activeM = false;
}

addTipoMaquina(){
  this.activeTM = true;
}

 createTipoMaquina(){
  this.tipoMaquinaService.postTipoMaquina(this.tpObject).subscribe((tm) => {
    this.tiposmaquinas.push(tm);
    this.getTipoMaquina();
  });
   this.activeTM = false;
 }

}
