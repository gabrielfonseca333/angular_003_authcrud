import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { ServiceEmpleados } from '../../services/service.empleados';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-alumno',
  templateUrl: './update-alumno.component.html',
  styleUrl: './update-alumno.component.css'
})
export class UpdateAlumnoComponent implements OnInit {

  constructor( private _service: ServiceEmpleados, private _activatedRoute: ActivatedRoute, private _router: Router) { }

  public Alumno!: Alumno;
  public idAlumno!: string;

  @ViewChild('cajaidalumno') cajaIdAlumno!: ElementRef;
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajaapellidos') cajaApellidos!: ElementRef;
  @ViewChild('cajaimagen') cajaImagen!: ElementRef;
  @ViewChild('cajaactivo') cajaActivo!: ElementRef;
  @ViewChild('cajaidCurso') cajaIdCurso!: ElementRef;


  ngOnInit(): void {
    this.loadAlumno()

  }

  updateAlumno(): void {

    let idAlumno = parseInt(this.cajaIdAlumno.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let apellidos = this.cajaApellidos.nativeElement.value;
    let imagen = this.cajaImagen.nativeElement.value;
    let activo = parseInt(this.cajaActivo.nativeElement.value);
    let idCurso = parseInt(this.cajaIdCurso.nativeElement.value);

    this.Alumno = {
      idAlumno: idAlumno,
      nombre: nombre,
      apellidos: apellidos,
      imagen: imagen,
      activo: activo,
      idCurso: idCurso
    }

    this._service.updateAlumno(this.Alumno).then(response => {
      console.log(response);
      this._router.navigate(['/']);
    });
  }

  loadAlumno(): void {
    this._activatedRoute.params.subscribe(params => {
      this.idAlumno = params['idAlumno'];
      console.log(this.idAlumno);
      this._service.getAlumno(this.idAlumno).then(response => {
        console.log(response);
        this.Alumno = response;
      });
    });
  }
    
  

}
