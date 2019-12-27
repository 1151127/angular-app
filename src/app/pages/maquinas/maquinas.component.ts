import { Component, OnInit, Inject } from '@angular/core';
import { MaquinaService } from 'src/app/services/maquina.service';
import { Maquina } from 'src/app/models/maquina/maquina';
import { TipoMaquinaService } from 'src/app/services/tipo-maquina.service';
import { TipoMaquina } from 'src/app/models/tipomaquina/tipomaquina';
import { OperacaoService } from 'src/app/services/operacao.service';
import { Operacao } from 'src/app/models/operacao/operacao';
import { OperacaoTipoMaquina } from 'src/app/models/operacaotipomaquina/operacaotipomaquina';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from 'src/app/components/my-dialog/my-dialog.component';
import { ShowDataComponent } from 'src/app/components/show-data/show-data.component';





@Component({
  selector: 'maquinas',
  templateUrl: './maquinas.component.html',
  styleUrls: ['./maquinas.component.scss']
})

export class MaquinasComponent implements OnInit {
  activeM = false;
  activeTM = false;
  maquinas: Maquina[] = [];
  tiposmaquinas: TipoMaquina[] = [];
  operacoes: Operacao[] = [];
  operacoesF: Operacao[] = [];
  operacoesIdArray: number[] = [];
  displayedColumnsM: string[] = ['nomeM', 'tipoM', 'editM'];
  displayedColumnsTM: string[] = ['nomeTM', 'descTM', 'listOp', 'edit'];
  opSupp: OperacaoTipoMaquina;
  tipomaquinaDoId: TipoMaquina;
  maquinaDoId: Maquina;
  operacaoNova = new OperacaoTipoMaquina();
  flag: boolean;


  //Find Maquinas
  tmNameFind1: string;
  maquinasFiltradas: any[] = [];

  //Find Operacoes
  tmNameFind2: string;
  operacoesFiltradas: any[] = [];

  mObject = new Maquina();
  tpObject = new TipoMaquina();

  constructor(
    private maquinaService: MaquinaService,
    private tipoMaquinaService: TipoMaquinaService,
    private operacaoService: OperacaoService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getTipoMaquina();
    this.getMaquinas();

    this.operacaoService.getAllOperacoesMaquinas().subscribe((oplist) => {
      this.operacoes = oplist;
    });
  }

  getMaquinas() {
    this.maquinaService.getAllMaquinas().subscribe((mlist) => {
      this.maquinas = mlist;
      //tmName -> maquina 
      this.maquinas.forEach((m) => {
        console.log("tipos", this.tiposmaquinas);
        this.tiposmaquinas.forEach((tm) => {
          if (tm.tipoMaquinaId === m.tipoMaquinaId) {
            m['tmName'] = tm.name;
          }
        });
      });
    });
  }


  getTipoMaquina() {
    this.tipoMaquinaService.getAllTiposMaquinas().subscribe((tmlist) => {
      this.tiposmaquinas = tmlist;
      console.log("tiposM: ", this.tiposmaquinas);
      //tmName -> maquina 
      this.maquinas.forEach((m) => {
        this.tiposmaquinas.forEach((tm) => {
          if (tm.tipoMaquinaId === m.tipoMaquinaId) {
            m['tmName'] = tm.name;
          }
        });
      });
    });
  }

  addMaquina() {
    this.activeM = !this.activeM;
  }

  createMaquina() {
    this.maquinaService.postMaquina(this.mObject).subscribe((m) => {
      this.maquinas.push(m);
      this.getMaquinas();
    });
    this.activeM = false;
  }

  addTipoMaquina() {
    this.activeTM = !this.activeTM;
  }

  createTipoMaquina() {
    this.operacoesF.forEach((op, index) => {
      this.operacoesIdArray[index] = op.operacaoId;
    });
    this.operacoesIdArray.forEach((opId, index) => {
      this.opSupp = new OperacaoTipoMaquina();
      this.tpObject.operacoesTiposMaquinas.push(this.opSupp);
      this.tpObject.operacoesTiposMaquinas[index].operacaoId = opId;
      this.tpObject.operacoesTiposMaquinas[index].tipoMaquinaId = this.tpObject.tipoMaquinaId;
    });

    this.tipoMaquinaService.postTipoMaquina(this.tpObject).subscribe((tm) => {
      // this.tiposmaquinas.push(tm);
      this.getTipoMaquina();
    });
    this.activeTM = false;
  }

  popUpWindowTipoMaquina(tmId: number): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      data: {
        lista: this.operacoes,
        maquina: false,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.saveTM(tmId, result);
    });
  }

  popUpWindowMaquina(mId: number): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      data: {
        lista: this.tiposmaquinas,
        maquina: true,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.saveM(mId, result);
    });
  }

  findMaquinaPorTM() {
    this.maquinasFiltradas = [];
    this.maquinas.forEach(M => {
      if (M['tmName'] === this.tmNameFind1) {
        this.maquinasFiltradas.push(M);
      }
    });
  }

  filterMaquinaPopUp() {
    this.findMaquinaPorTM();
    // console.log("maquinasFiltradas: ", this.maquinasFiltradas);
    const dialogRef = this.dialog.open(ShowDataComponent, {
      data: {
        maquina: true,
        maquinasfiltradas: this.maquinasFiltradas,
        tipomaquina: this.tmNameFind1,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }


  findOperacoesPorTM() {
    this.operacoesFiltradas = [];
    this.tiposmaquinas.forEach((TM, index) => {
      if (TM.name === this.tmNameFind2) {
        TM['listOperacoes'].forEach((op) => {
          this.flag = false;
          for (let i = 0; i < this.operacoesFiltradas.length; i++) {
            if (this.operacoesFiltradas[i].operacaoId === op.operacaoId) {
              this.flag = true;
            }
          }
          if (!this.flag) {
            this.operacoesFiltradas.push(op);
          }
        });
      }

    });
    console.log("operacoesFiltradas: ", this.operacoesFiltradas);
  }



  filterOperacaoPopUp() {
    this.findOperacoesPorTM();
    console.log("maquinasFiltradas: ", this.maquinasFiltradas);
    const dialogRef = this.dialog.open(ShowDataComponent, {
      data: {
        maquina: false,
        operacoesfiltradas: this.operacoesFiltradas,
        tipomaquina: this.tmNameFind2,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  saveTM(id: number, operacoes: OperacaoTipoMaquina[]) {
    this.tipoMaquinaService.getTipoMaquinaById(id).subscribe((tmIdAux) => {
      this.tipomaquinaDoId = tmIdAux;
      this.tipomaquinaDoId.operacoesTiposMaquinas = [];
      console.log(operacoes);
      operacoes.forEach((op, index) => {
        console.log(op.operacaoId);
        this.operacaoNova = new OperacaoTipoMaquina();
        this.operacaoNova.operacaoId = op.operacaoId;
        this.operacaoNova.tipoMaquinaId = id;
        this.tipomaquinaDoId.operacoesTiposMaquinas.push(this.operacaoNova);
      });

      this.tipoMaquinaService.putTipoMaquina(this.tipomaquinaDoId).subscribe((tm) => {
        this.getTipoMaquina();
      });
    });
  }


  saveM(id: number, tiposmaquinas: TipoMaquina) {
    this.maquinaService.getMaquinaById(id).subscribe((mIdAux) => {
      this.maquinaDoId = mIdAux;
      this.maquinaDoId.tipoMaquinaId = tiposmaquinas.tipoMaquinaId;
      this.maquinaDoId['golos'] = 1;
      console.log("maquina", this.maquinaDoId);
      this.maquinaService.putMaquina(this.maquinaDoId).subscribe((m) => {
        this.getMaquinas();
      });
    });


  }


}


