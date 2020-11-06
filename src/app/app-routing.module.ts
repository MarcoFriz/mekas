import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'config', loadChildren: () => import('./config/config.module').then(m => m.ConfigModule) },
  { path: 'logout', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'autos', loadChildren: () => import('./autos/autos.module').then(m => m.AutosModule) },
  { path: 'mecanicos', loadChildren: () => import('./mecanicos/mecanicos.module').then(m => m.MecanicosModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
