import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }


  onSubmit(): void {
    console.warn('Your credentials have been submitted', JSON.parse(JSON.stringify(this.loginForm.getRawValue(), null, 2)));
    const val = this.loginForm.value;
    if (val.name && val.password) {
      this.authService.login(val);
    }
    this.loginForm.reset();
  }

  get f() { return this.loginForm.controls; }

  login() {
    this.authService.login(
      {
        name: this.f.name.value,
        password: this.f.password.value
      }
    )
      ._subscribe(success => {
        if (success) {
          this.router.navigate(['']);
        }
      });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: [''],
      password: ['']
    });
  }

}
