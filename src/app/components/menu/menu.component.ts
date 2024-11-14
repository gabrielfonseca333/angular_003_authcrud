import { Component } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private _service: ServiceEmpleados, private _app: AppComponent, private _router: Router) { }

  cerrarSesion(): void{
    this._service.cerrarSesion();
    this._app.updateToken();
    this._router.navigate(['/login']);
  }

}
