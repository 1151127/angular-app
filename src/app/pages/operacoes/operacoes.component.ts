import { Component, OnInit } from '@angular/core';
import { Operacao } from 'src/app/models/operacao/operacao';
import { OperacaoService } from 'src/app/services/operacao.service';

@Component({
  selector: 'operacoes',
  templateUrl: './operacoes.component.html',
  styleUrls: ['./operacoes.component.scss']
})
export class OperacoesComponent implements OnInit {
  operacoes: Operacao[] = [];
  opObject = new Operacao();
  displayedColumnsO: string[] = ['nomeOP', 'descOP'];
  activeO: boolean;

  constructor(private operacaoService: OperacaoService) { }

  ngOnInit() {
    this.getOperacoes();
  }


  getOperacoes() {
    this.operacaoService.getAllOperacoesMaquinas().subscribe((oplist) => {
      this.operacoes = oplist;
    });
  }

  addOperacao() {
    this.activeO = true;
  }

  createOperacao() {
    this.operacaoService.postOperacao(this.opObject).subscribe((op) => {
      this.operacoes.push(op);
      this.getOperacoes();
    });
    this.activeO = false;
  }

}
