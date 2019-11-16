import { Component, OnInit } from '@angular/core';
import { MaquinaService } from 'src/app/services/maquina.service';


@Component({
  selector: 'maquinas',
  templateUrl: './maquinas.component.html',
  styleUrls: ['./maquinas.component.scss']
})
export class MaquinasComponent implements OnInit {
  // listMaquinas: Maquina[] = [];
  maquinas;

  constructor(private maquinaService: MaquinaService) { }

  ngOnInit() {
    // this.getMaquinas();

    this.maquinaService.getAllMaquinas().subscribe((data)=>{
      console.log(data);
      this.maquinas = data['maquinas'];
    })
  }


  // async getMaquinas() {
  //   let maquinas = await this.maquinaService.getAllMaquinas();
  //   console.log("OMG");

  //   // maquinas.subscribe(m => this.listMaquinas = m);
  //   maquinas.subscribe((m) => {
  //     if (m != null) {
  //       this.listMaquinas = m;
  //     }
  //   });
  //   console.log(this.listMaquinas);
  // }

}
