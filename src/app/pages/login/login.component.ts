import { Component, OnInit } from '@angular/core';
import { UtilizadorService } from 'src/app/services/utilizador.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
  clientStatus: number = 0;

  constructor(
    private utilizadorService: UtilizadorService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }


  verifyUser() {
    this.utilizadorService.getAllUsers().subscribe((userList) => {
      this.users = userList;

      this.users.forEach(user => {
        console.log("name: ", user.nome);
        console.log("pass: ", user.pass);
        // console.log("desc: ", user.tipoUtilizadorDesc);
        console.log(this.nome);
        console.log(this.password);
        if (user.nome === this.nome && user.pass === this.password) {
          this.verify = true;
          if (this.verify) {
            if (user.tipoUtilizadorDesc === "client") {
              this.authService.setState(1, user._id);
              this.router.navigate(['/','home']);
              // console.log("STATS: ", this.clienteStatus);
            } else if(user.tipoUtilizadorDesc === "admin") {
              this.authService.setState(2, user._id);
              this.router.navigate(['/','home']);
              // console.log("STATS2: ", this.clienteStatus);
            }
          }
        }
      });
    });

  }

}
