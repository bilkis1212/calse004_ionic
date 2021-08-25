import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejemplo3PageRoutingModule } from './ejemplo3-routing.module';

import { Ejemplo3Page } from './ejemplo3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejemplo3PageRoutingModule
  ],
  declarations: [Ejemplo3Page]
})
export class Ejemplo3PageModule {}
