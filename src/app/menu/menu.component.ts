import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  //isUserLoggedIn: boolean | undefined;

  constructor(public hardcodedAuthenticationService 
    : HardcodedAuthenticationService) { }

    ngOnInit() {
       //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
    }

}
