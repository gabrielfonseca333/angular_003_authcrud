import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ServiceEmpleados } from './services/service.empleados';
import { MenusintokenComponent } from './components/menusintoken/menusintoken.component';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { UpdateAlumnoComponent } from './components/update-alumno/update-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    MenusintokenComponent,
    CrearAlumnoComponent,
    UpdateAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiceEmpleados],
  bootstrap: [AppComponent]
})
export class AppModule { }
