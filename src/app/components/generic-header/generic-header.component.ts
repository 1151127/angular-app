import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'generic-header',
  templateUrl: './generic-header.component.html',
  styleUrls: ['./generic-header.component.scss']
})
export class GenericHeaderComponent implements OnInit {
  
  clientState = 0;

  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.authService.state.subscribe( s => {
      this.clientState = s;
      console.log(this.clientState);
   });
  }


  logout(){
    this.authService.setState(0, '');
    this.router.navigate(['/','login']);
  }

}
