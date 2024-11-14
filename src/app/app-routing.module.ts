import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { UpdateAlumnoComponent } from './components/update-alumno/update-alumno.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "crearalumno", component: CrearAlumnoComponent},
  {path: "update/:idAlumno", component: UpdateAlumnoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
