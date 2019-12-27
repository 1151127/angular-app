import { Component, OnInit } from '@angular/core';
import { UtilizadorService } from 'src/app/services/utilizador.service';


@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {



  clientState = 2;
  adminId = "5dfd0446d596170514b78d16";
  clientId = "5dfcf390cb1d99001714f7bf";
  userList: any[] = [];
  myUser: any;


  finder: string = "";
  cancelFind: boolean = false;

  constructor(
    private utilizadorService: UtilizadorService,
  ) { }


  ngOnInit() {
    this.getUsers();
  }

  getUsers() {

    if (this.clientState === 2) {
      this.utilizadorService.getAllUsers().subscribe(users => {
        this.userList = users;
      });
    }

    if (this.clientState === 1) {
      this.utilizadorService.getUserById(this.clientId).subscribe(client => {
        this.myUser = client;
        console.log();
      });

    }
  }

  save(user) {
    console.log("dasds", user);
    if (user == null) {
      console.log("DAM");
      console.log("USER: ", this.myUser);
      this.utilizadorService.putUtilizador(this.myUser).subscribe();
    } else {
      this.utilizadorService.putUtilizador(user).subscribe();
    }
  }


  find() {
    if (this.finder === '') {
      this.userList = [];
      this.cancelFind = true;
    } else {
      var element = this.userList.find(u => u.nome === this.finder);
      console.log(element);
      if(element != null){
        this.userList = [];
        this.userList.push(element);
        this.cancelFind = true;
      } else{
        this.userList = [];
        this.cancelFind = true;
      }
    }
  }


  cancel(){
      this.cancelFind = false;
      this. getUsers();
      
  }

}
