import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    name: '',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }


  onSubmit(): void {
    console.warn('Your credentials have been submitted', JSON.parse(JSON.stringify(this.loginForm.getRawValue(), null, 12)));
    const val = this.loginForm.value;
    if (val.name && val.password) {
      this.authService.login(val.name, val.password);
    }
    this.loginForm.reset();
  }


  ngOnInit(): void {
  }

}
