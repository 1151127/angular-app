import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { MatDialog } from '@angular/material';
import { BuyItemComponent } from 'src/app/components/buy-item/buy-item.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-encomendas',
  templateUrl: './encomendas.component.html',
  styleUrls: ['./encomendas.component.scss']
})
export class EncomendasComponent implements OnInit {

  produtos: any[] = [];
  cu = "faca_de_serra .png";
  clientId = '';

  constructor(
    private produtoService: ProdutoService,
    public dialog: MatDialog,
    private authService : AuthService,
  ) { }

  ngOnInit() {

    this.authService.id.subscribe( id => {
      this.clientId = id;
      console.log(this.clientId);
   });

    this.produtoService.getAllProdutos().subscribe((produtosList) => {
      this.produtos = produtosList;
      console.log(this.produtos);
    });
  }


  encomendaProduto(produto) {
    console.log(" 100 + 100 = 200  ");
    const dialogRef = this.dialog.open(BuyItemComponent, {
      data: {
        prod: produto,
        idClient: this.clientId,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Big Deal!");
    });


  }

}
