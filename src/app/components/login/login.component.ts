import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    name: '',
    password: ''
  })

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    console.warn('Your credentials have been submitted', JSON.parse(JSON.stringify(this.loginForm.getRawValue(), null, 12)));
    this.loginForm.reset();
  }


  ngOnInit(): void {
  }

}
