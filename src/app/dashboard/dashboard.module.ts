import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamComponent } from './exam/exam.component';
import { AdminComponent } from './admin/admin.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


const routes: Routes = [{ path: '', component: ExamComponent},
  { path: 'admin', component: AdminComponent}];
@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, SharedModule, CommonModule, FormsModule],
  exports: [RouterModule],
  declarations: [ExamComponent, AdminComponent]
})
export class DashboardModule { }
