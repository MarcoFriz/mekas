import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MecanicosComponent } from './mecanicos.component';

const routes: Routes = [{ path: '', component: MecanicosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MecanicosRoutingModule { }
