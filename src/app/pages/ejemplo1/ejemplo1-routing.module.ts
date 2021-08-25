import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejemplo1Page } from './ejemplo1.page';

const routes: Routes = [
  {
    path: '',
    component: Ejemplo1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejemplo1PageRoutingModule {}
