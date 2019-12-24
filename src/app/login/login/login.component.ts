import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ServercallService } from '../../shared/services/servercall.service';
import {Router} from '@angular/router';
import {LocalstorageService} from '../../shared/services/localstorage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  detailForm: FormGroup;

  constructor(private fb: FormBuilder,
              private servercallService: ServercallService,
              private router: Router,
              private localstorageService: LocalstorageService) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.detailForm = this.fb.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
      loginAs: ['student', Validators.required]
    });
  }
  submit() {
    console.log('this.detailForm', this.detailForm);
    if (this.detailForm.valid) {
        this.servercallService.login(this.detailForm.value).subscribe((data) => {
          console.log('data', data);
          this.localstorageService.setItem('token', data['token']);
          this.router.navigate(['dashboard/admin']);
        });
    }
  }

}
