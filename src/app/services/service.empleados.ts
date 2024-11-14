import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Alumno } from '../models/alumno';


@Injectable()
export class ServiceEmpleados {

    constructor(private _router: Router) { }

    login(usuario: string, password: string){
        let request = "api/auth/login"
        let url = environment.urlApiEjemplos + request;
        return axios.post(url, {
            userName: usuario,
            Password: password
        }).then(response => {
       
            let token = response.data.response
            localStorage.setItem("token", token);


            this._router.navigate(['/']);

            return response.data.response;
        });
    }

    getAlumnos(): Promise<any>{
        let request = "api/alumnos/alumnostoken"
        let url = environment.urlApiEjemplos + request;
        return axios.get(url, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then(response => {
            console.log(response.data);
            return response.data;
        });
    }

    createAlumno(alumno: Alumno): Promise<any>{
        let request = "api/alumnos/insertalumnotoken"
        let url = environment.urlApiEjemplos + request;

        /* hay que hacer el post con el token:  headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then(response => {
            console.log(response.data);
            return response.data; */

        return axios.post(url, alumno, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then(response => {
            console.log(response.data);
            return response.data;
        });
    }

    updateAlumno(alumno: Alumno): Promise<any>{
        let request = "api/alumnos/updatealumnotoken"
        let url = environment.urlApiEjemplos + request;
        return axios.put(url, alumno, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then(response => {
            console.log(response.data);
            return response.data;
        });
    }

    getAlumno(idAlumno: string): Promise<any>{
        let request = "api/alumnos/findalumnotoken/" + idAlumno
        let url = environment.urlApiEjemplos + request;
        return axios.get(url, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then(response => {
            console.log(response.data);
            return response.data;
        });
    }

    deleteAlumno(idAlumno: string): Promise<any>{
        let request = "api/alumnos/deletealumnotoken/" + idAlumno
        let url = environment.urlApiEjemplos + request;
        return axios.delete(url, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then(response => {
            console.log(response.data);
            return response.data;
        });
    }

    cerrarSesion(): void{
        localStorage.removeItem("token");
    }

}