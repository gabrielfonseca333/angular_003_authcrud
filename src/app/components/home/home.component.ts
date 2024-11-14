import { Component } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private _service: ServiceEmpleados) {
    this.loadAlumnos();
    this.verToken();
   }

   public token!: string | null;
   verToken(): void {
    this.token = localStorage.getItem("token");
  }

  public alumnos!: Alumno[];

  loadAlumnos(): void{
    this._service.getAlumnos().then(response => {
      console.log("🤩", response);
      this.alumnos = response;
    });
  }

  eliminarAlumno(idAlumno: any): void{
    this._service.deleteAlumno(idAlumno).then(response => {
      console.log(response);
      this.loadAlumnos();
    });
  }

}
