import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaComponent } from './producto/lista/lista.component';
import { PrincipalComponent } from './producto/principal/principal.component';

const routes: Routes = [
  { 
    path: 'home',
    component: AppComponent

  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'lista',
    component: ListaComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
