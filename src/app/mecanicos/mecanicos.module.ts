import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MecanicosRoutingModule } from './mecanicos-routing.module';
import { MecanicosComponent } from './mecanicos.component';


@NgModule({
  declarations: [MecanicosComponent],
  imports: [
    CommonModule,
    MecanicosRoutingModule
  ]
})
export class MecanicosModule { }
