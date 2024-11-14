import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

@Injectable()
export class AppComponent {
  title = 'angular_003_authcrud';

  public token: string |null = null;

  constructor() {
    this.updateToken()
   }


  updateToken(): void {
    this.token = localStorage.getItem("token");
  }

  

  
}
