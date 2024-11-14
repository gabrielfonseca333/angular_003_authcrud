import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


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

    cerrarSesion(): void{
        localStorage.removeItem("token");
    }

}