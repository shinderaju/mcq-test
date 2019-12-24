import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RigisterComponent } from './rigister/rigister.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: 'login', component: LoginComponent}, { path: 'register', component: RigisterComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, SharedModule],
  exports: [RouterModule],
  declarations: [LoginComponent, RigisterComponent]
})
export class LoginModule { }
