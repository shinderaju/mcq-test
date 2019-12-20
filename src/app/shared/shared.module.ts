import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalstorageService } from './services/localstorage.service';
import { AuthenticationService } from './services/authentication.service';
import { InputrefDirective } from './directives/inputref.directive';
import { CustomErroComponent } from './componentes/custom-erro/custom-erro.component';
const SharedComponents = [CustomErroComponent];
const SharedServices = [LocalstorageService, AuthenticationService];

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
    ...SharedDirectives,],
  providers: [SharedServices]
})
export class SharedModule { }
