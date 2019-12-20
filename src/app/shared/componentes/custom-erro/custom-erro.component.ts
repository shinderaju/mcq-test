import { Component, Input, ContentChild, OnInit } from '@angular/core';
import { InputrefDirective } from '../../directives/inputref.directive';
import { debug } from 'util';
@Component({
  selector: 'app-custom-erro',
  templateUrl: './custom-erro.component.html',
  styleUrls: ['./custom-erro.component.css']
})
export class CustomErroComponent implements OnInit {

  @Input() label: string;
  @Input() validations:  { [index: string]: string};
  @Input() info: string;

  @ContentChild(InputrefDirective) input: InputrefDirective;

  get isError() {
    return this.input.hasError;
  }

  get errorMessages() {
    const errors = this.input.errors;
    const messages = [];
    const keys = Object.keys(this.validations);

    keys.forEach(key => {
      if (errors[key]) {
        messages.push(this.validations[key]);
      }
    });
    return messages;
  }
  constructor() { }

  ngOnInit() {
  }

}
