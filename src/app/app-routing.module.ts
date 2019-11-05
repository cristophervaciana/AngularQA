import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AlimentosListComponent} from './components/alimentos-list/alimentos-list.component';
import {AlimentosFormComponent} from './components/alimentos-form/alimentos-form.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/alimentos',
    pathMatch:'full'
  },
  {
    path:'alimentos',
    component:AlimentosListComponent
  },
  {
    path:'alimentos/add',
    component:AlimentosFormComponent
  },
  {
    path:'alimentos/edit/:idalimento',
    component:AlimentosFormComponent
  },
  {
    path:'alimentos/search/:idalimento',
    component:AlimentosListComponent   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
