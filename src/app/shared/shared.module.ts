import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalstorageService } from './services/localstorage.service';
import { AuthenticationService } from './services/authentication.service';
import { InputrefDirective } from './directives/inputref.directive';
import { CustomErroComponent } from './componentes/custom-erro/custom-erro.component';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
const SharedComponents = [CustomErroComponent];
const SharedServices = [LocalstorageService, AuthenticationService, AuthGuardService, AuthService];

const SharedPipes = [];

const SharedDirectives = [InputrefDirective];
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ...SharedComponents,
    ...SharedPipes,
    ...SharedDirectives,
  ],
  declarations: [ ...SharedComponents,
    ...SharedPipes,
    ...SharedDirectives],
  providers: [SharedServices]
})
export class SharedModule {
}
