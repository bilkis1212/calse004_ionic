import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejemplo3Page } from './ejemplo3.page';

const routes: Routes = [
  {
    path: '',
    component: Ejemplo3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejemplo3PageRoutingModule {}
