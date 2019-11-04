import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { phoneNumberValidator } from 'src/app/validators/phone-validator';
//import { phoneNumberValidator } from 'src/app/validators/phone-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailPattern: string = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  
  get getUsername(){
    return this.loginForm.get('username');
  }

  get getPassword(){
    return this.loginForm.get('password');
  }

  get getFullname(){
    return this.signupForm.get('fullname');
  }

  get getEmail(){
    return this.signupForm.get('email');
  }

  get getMobile(){
    return this.signupForm.get('mobile');
  }
  constructor(private lf: FormBuilder, private sf: FormBuilder) { }

  ngOnInit() {
    document.querySelector('.img__btn').addEventListener('click', function() {
      document.querySelector('.cont').classList.toggle('s--signup');
    });
  }

  loginForm = this.lf.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  signupForm = this.sf.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    mobile: ['', [Validators.required, phoneNumberValidator, Validators.minLength(10), Validators.maxLength(10)]],
    gender: ['', Validators.required]
  });
}