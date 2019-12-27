import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto/produto';
import { PlanoFabrico } from 'src/app/models/planofabrico/planofabrico';
import { ProdutoService } from 'src/app/services/produto.service';
import { PlanoFabricoService } from 'src/app/services/plano-fabrico.service';
import { OperacaoService } from 'src/app/services/operacao.service';
import { Operacao } from 'src/app/models/operacao/operacao';

@Component({
  selector: 'produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  planosFabricos: PlanoFabrico[] = [];
  operacoes: Operacao[] = [];
  activeP: boolean;
  activePF: boolean;
  pObject = new Produto();
  pfObject = new PlanoFabrico();
  displayedColumnsP: string[] = ['nomeP', 'tipoP', 'categ', 'preco', 'planoF'];
  displayedColumnsPF: string[] = ['nomePF', 'descPF', 'listOP'];

  constructor(private produtoService: ProdutoService, private planoFabricoService: PlanoFabricoService, private operacaoService: OperacaoService) { }

  Categorias = [
    {
      name: 'Garfo',
    },
    {
      name: 'Garfo_de_Peixe',
    },
    {
      name: 'Faca',
    },
    {
      name: 'Faca_de_Serra',
    },
    {
      name: 'Faca_de_Peixe',
    },
    {
      name: 'Colher_de_Sopa',
    },
    {
      name: 'Colher_de_Sobremesa'
    },
    {
      name: 'Colher_de_Pau',
    }
  ];


  ngOnInit() {
    this.getProdutos();
    this.getPlanosFabricos();
  }

  getProdutos() {
    this.produtoService.getAllProdutos().subscribe((plist) => {
      this.produtos = plist;
      this.produtos.forEach((p) => {
        console.log('planos', this.planosFabricos);
        this.planosFabricos.forEach((pf) => {
          if (pf.planoFabricoId === p.planoFabricoId) {
            p['pfName'] = pf.name;
          }
        });
      });
      // console.log(this.produtos);
    });
  }

  getPlanosFabricos() {
    this.planoFabricoService.getAllPlanosFabricos().subscribe((pflist) => {
      this.planosFabricos = pflist;
      this.produtos.forEach((p) => {
        console.log('planos', this.planosFabricos);
        this.planosFabricos.forEach((pf) => {
          if (pf.planoFabricoId === p.planoFabricoId) {
            p['pfName'] = pf.name;
          }
        });
      });
      // console.log(this.planosFabricos);
    });
  }

  addProduto() {
    this.activeP = !this.activeP;
  }

  createProduto() {
    this.produtoService.postProduto(this.pObject).subscribe((p) => {
      this.produtos.push(p);
      this.getProdutos();
    });

    this.activeP = false;
  }

  addPlanoFabrico() {
    this.operacaoService.getAllOperacoesMaquinas().subscribe((oplist) => {
      this.operacoes = oplist;
      console.log(this.planosFabricos);
    });
    this.activePF = !this.activePF;
  }

  createPlanoFabrico() {
    this.planoFabricoService.postPlanoFabrico(this.pfObject).subscribe((pf) => {
      this.planosFabricos.push(pf);
      this.getPlanosFabricos();
    });

    this.activePF = false;
  }


}
