import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamComponent } from './exam/exam.component';
import { AdminComponent } from './admin/admin.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {AuthGuardService} from '../shared/services/auth-guard.service';
import {RoleGuardService} from '../shared/services/role-guard.service';


const routes: Routes = [
  { path: '', component: ExamComponent, canActivate: [AuthGuardService] },
  { path: 'admin', component: AdminComponent, canActivate: [RoleGuardService], data: {expectedRole: 'admin'} }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, SharedModule, CommonModule, FormsModule],
  exports: [RouterModule],
  declarations: [ExamComponent, AdminComponent]
})
export class DashboardModule { }
