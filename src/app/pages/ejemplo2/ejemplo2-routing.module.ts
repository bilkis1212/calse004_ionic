import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejemplo2Page } from './ejemplo2.page';

const routes: Routes = [
  {
    path: '',
    component: Ejemplo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejemplo2PageRoutingModule {}
