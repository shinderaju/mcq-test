import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user', loadChildren: './login/login.module#LoginModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
