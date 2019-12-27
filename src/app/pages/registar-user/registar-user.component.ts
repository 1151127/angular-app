import { Component, OnInit } from '@angular/core';
import { Utilizador } from 'src/app/models/utilizador/utilizador';
import { UtilizadorService } from 'src/app/services/utilizador.service';
import { TipoUtilizador } from 'src/app/models/tipoUtilizador/tipoUtilizador';
import { TipoUtilizadorService } from 'src/app/services/tipo-utilizador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'registarUser',
  templateUrl: './registar-user.component.html',
  styleUrls: ['./registar-user.component.scss']
})
export class RegistarUserComponent implements OnInit {

  uObject = new Utilizador();
  users: any[] = [];
  tiposUsers: any[] = [];

  constructor(
    private utilizadorService: UtilizadorService,
    private tipoUtizadorService: TipoUtilizadorService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.tipoUtizadorService.getAllTiposUsers().subscribe((tipoUserList) => {
      this.tiposUsers = tipoUserList;
    });
  }

  registarUtilizador() {
 
    if (this.uObject.nome != null && this.uObject.email != null && this.uObject.morada != null && this.uObject.pass != null) {
      // const tuCliente = this.tiposUsers.find(tu => tu.desc = "client");
      // console.log("find: ", tuCliente);
      // if (tuCliente != null) { 
      //   const uClient  = new TipoUtilizador();
      //   uClient._id = tuCliente._id;
      //   uClient.desc = tuCliente.desc;
      // }
        this.uObject.tipoUtilizadorDesc = "client";
   

      console.log("Utilizador Novo1", this.uObject);
      this.utilizadorService.postUtilizador(this.uObject).subscribe((u) => { 
        this.router.navigate(['/','login']);
      }
      );
    }
  }


}
