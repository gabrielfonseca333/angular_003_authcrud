import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrl: './crear-alumno.component.css'
})
export class CrearAlumnoComponent {

  constructor(private _service: ServiceEmpleados, private _router: Router) { }

  @ViewChild('cajaidalumno') cajaIdAlumno!: ElementRef;
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajaapellidos') cajaApellidos!: ElementRef;
  @ViewChild('cajaimagen') cajaImagen!: ElementRef;
  @ViewChild('cajaactivo') cajaActivo!: ElementRef;
  @ViewChild('cajaidCurso') cajaIdCurso!: ElementRef;

  crearAlumno(): void{
    let idAlumno = 0
    let nombre = this.cajaNombre.nativeElement.value;
    let apellidos = this.cajaApellidos.nativeElement.value;
    let imagen = this.cajaImagen.nativeElement.value;
    let activo = this.cajaActivo.nativeElement.value;
    let idCurso = this.cajaIdCurso.nativeElement.value;

    let alumno = {
      idAlumno: idAlumno,
      nombre: nombre,
      apellidos: apellidos,
      imagen: imagen,
      activo: activo,
      idCurso: idCurso
    }

    this._service.createAlumno(alumno).then(response => {
      console.log(response);
      this._router.navigate(['/']);
    });
  }

}
