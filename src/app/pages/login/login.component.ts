import { Component, OnInit } from '@angular/core';
import { UtilizadorService } from 'src/app/services/utilizador.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: any[] = [];
  verify: boolean = false;

  nome: string;
  password: string;
  clienteStatus: number = 0;

  constructor(
    private utilizadorService: UtilizadorService,
  ) { }

  ngOnInit() {


  }


  verifyUser() {
    this.utilizadorService.getAllUsers().subscribe((userList) => {
      this.users = userList;

      this.users.forEach(user => {
        // console.log("name: ", user.nome);
        // console.log("pass: ", user.pass);
        // console.log("desc: ", user.tipoUtilizadorDesc);
        // console.log(this.nome);
        // console.log(this.password);
        if (user.nome === this.nome && user.pass === this.password) {
          this.verify = true;
          if (this.verify) {
            if (user.tipoUtilizadorDesc === "client") {
              this.clienteStatus = 1;

              // console.log("STATS: ", this.clienteStatus);
            } else if(user.tipoUtilizadorDesc === "admin") {
              this.clienteStatus = 2;
              // console.log("STATS2: ", this.clienteStatus);
            }
          }
        }
      });
    });

  }

}
