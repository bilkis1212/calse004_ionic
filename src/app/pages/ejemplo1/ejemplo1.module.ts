import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejemplo1PageRoutingModule } from './ejemplo1-routing.module';

import { Ejemplo1Page } from './ejemplo1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejemplo1PageRoutingModule
  ],
  declarations: [Ejemplo1Page]
})
export class Ejemplo1PageModule {}
