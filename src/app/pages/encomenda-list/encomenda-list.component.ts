import { Component, OnInit } from '@angular/core';
import { EncomendaService } from 'src/app/services/encomenda.service';
import { Encomenda } from 'src/app/models/encomenda/encomenda';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'encomenda-list',
  templateUrl: './encomenda-list.component.html',
  styleUrls: ['./encomenda-list.component.scss']
})

export class EncomendaListComponent implements OnInit {



  displayedColumnsE: string[];


  clientState = 2;
  adminId = "5dfd0446d596170514b78d16";
  clientId = "5dfcf390cb1d99001714f7bf";
  finder: string = "";
  cancelFind: boolean = false;

  minhasEncomendas: Encomenda[] = [];
  encomendas: Encomenda[] = [];

  constructor(
    private encomendasService: EncomendaService,
  ) { }

  ngOnInit() {
      this.getEncomendas();
  }


  getEncomendas(){
    if (this.clientState === 2) {

      this.displayedColumnsE = ['id', 'quantidade', 'dataC', 'dataE', 'preco', 'save'];

      this.encomendasService.getAllEncomendas().subscribe(encomendas => {
        this.minhasEncomendas = encomendas;
        console.log("Encomendas1: ", this.minhasEncomendas);
      });
    }

    if (this.clientState === 1) {

      this.displayedColumnsE = ['id', 'quantidade', 'dataC', 'dataE', 'preco'];

      this.encomendasService.getAllByClient(this.clientId).subscribe(encomendas => {
        this.minhasEncomendas = encomendas;
      });

    }
    console.log("Encomendas2: ", this.minhasEncomendas);
  }


  alterarEncomenda(encomenda) {
    console.log("yey")
    this.encomendasService.putEncomenda(encomenda).subscribe();
  }


  cancelarEncomenda(encomenda) {
    console.log("encomenda ID:", encomenda._id);
    this.encomendasService.delEncomenda(encomenda._id).subscribe();
  }


  find() {
    if (this.finder === '') {
      this.minhasEncomendas = [];
      this.cancelFind = true;
    } else {
      var element = this.minhasEncomendas.find(e => e._id === this.finder);
      console.log(element);
      if(element != null){
        this.minhasEncomendas = [];
        this.minhasEncomendas.push(element);
        this.cancelFind = true;
      } else{
        this.minhasEncomendas = [];
        this.cancelFind = true;
      }
    }
  }


  cancel(){
      this.cancelFind = false;
      this.getEncomendas();
      
  }
}
