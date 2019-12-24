import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from './../../shared/classes/custom-validators';
import {ServercallService} from '../../shared/services/servercall.service';
import {Router} from '@angular/router';
import { LocalstorageService } from '../../shared/services/localstorage.service';
@Component({
  selector: 'app-rigister',
  templateUrl: './rigister.component.html',
  styleUrls: ['./rigister.component.css']
})
export class RigisterComponent implements OnInit {

  public frmSignup: FormGroup;

  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder, private servercallService: ServercallService,
              private router: Router,
              private localstorageService: LocalstorageService) {
    this.frmSignup = this.createSignupForm();
  }

  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        name: [
          null,
          Validators.compose([Validators.required])
        ],
        email: [
          null,
          Validators.compose([Validators.email, Validators.required])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // check whether the entered password has a lower case letter
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            // check whether the entered password has a special character
            CustomValidators.patternValidator(
              /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              {
                hasSpecialCharacters: true
              }
            ),
            Validators.minLength(8)
          ])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])],
        role: [ 'student',
          Validators.compose([Validators.required])
        ]
      },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }

  submit() {
    // do signup or something
    console.log(this.frmSignup.value);
    if (this.frmSignup.valid) {
      this.servercallService.register(this.frmSignup.value).subscribe((data) => {
        console.log('data', data);
        this.localstorageService.setItem('token', data['token']);
        this.router.navigate(['dashboard/admin']);
      });
    }
  }

}
