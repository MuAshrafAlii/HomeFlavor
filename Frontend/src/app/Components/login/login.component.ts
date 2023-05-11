import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from 'src/app/Services/backend.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private myService: BackendService, public myRouter: Router) {}

  validationForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  get emailValid() {
    return this.validationForm.controls['email'].valid;
  }
  get passwordValid() {
    return this.validationForm.controls['password'].valid;
  }

  add(email: any, password: any) {
    if (this.validationForm.valid) {
      let email = this.validationForm.controls['email'].value;
      let password = this.validationForm.controls['password'].value;

      let user = { email, password };

      this.myService.userLogin(user).subscribe();

      alert('successfully');
      this.myRouter.navigateByUrl('/profile');
    } else {
      alert('please validate');
    }
  }
}
