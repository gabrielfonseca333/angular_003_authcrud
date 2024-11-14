import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('cajausername') cajaUsername!: ElementRef;
  @ViewChild('cajapassword') cajaPassword!: ElementRef;

  constructor(private _service: ServiceEmpleados, private _app: AppComponent, private _router: Router) { }

  login(): void{
    let usuario = this.cajaUsername.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;

    this._service.login(usuario, password).then(token => {
      console.log(token);
      if(token){
        this._app.updateToken();
        this._router.navigate(['/']);
      }
    });
  }

}
