import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Encomenda } from 'src/app/models/encomenda/encomenda';
import { EncomendaService } from 'src/app/services/encomenda.service';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.scss']
})
export class BuyItemComponent implements OnInit {
  


encomenda = new Encomenda();
dataEntrega = new Date();
precoEncomenda = this.encomenda.quantidade * this.data.prod.preco;

  constructor(   private encomendaService: EncomendaService, public dialogRef: MatDialogRef<BuyItemComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.encomenda.quantidade = 1;
  }

 encomendar(){
    this.encomenda.produtoId = this.data.prod.produtoId;
    this.encomenda.dataCriacaoEncomenda = new Date();
    this.dataEntrega.setDate( this.encomenda.dataCriacaoEncomenda.getDate() + 7);
    this.encomenda.dataEntregaEncomenda =  this.dataEntrega;
    this.encomenda.estadoBloqueado = false;
    this.encomenda.precoTotal = this.data.prod.preco * this.encomenda.quantidade;
    this.encomenda.cliente = this.data.idClient;
    console.log("Encomenda : ", this.encomenda);

    this.encomendaService.postEncomenda( this.encomenda).subscribe((e) => {
      this.dialogRef.close();
    });
  }

  close() {
    this.dialogRef.close();
  }

}
