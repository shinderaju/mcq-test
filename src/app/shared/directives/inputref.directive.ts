import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';
@Directive({
  selector: '[appInputref]'
})
export class InputrefDirective {

  constructor(private formControl: NgControl) {
  }

  get hasError() {
    return this.formControl.dirty && this.formControl.invalid;
  }

  get errors() {
    if (this.hasError && this.formControl.errors) {
      return this.formControl.errors;
    }
    return '';
  }

}
