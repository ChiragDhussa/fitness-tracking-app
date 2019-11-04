import { Component, OnInit } from '@angular/core';
// import {FormGroup, FormControl, Validators} from '@angular/forms';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginForm : FormGroup;
  
  get getUsername(){
    return this.loginForm.get('username');
  }

  get getPassword(){
    return this.loginForm.get('password');
  }
  constructor(private lf: FormBuilder, private sf: FormBuilder) { }

  ngOnInit() {
    document.querySelector('.img__btn').addEventListener('click', function() {
      document.querySelector('.cont').classList.toggle('s--signup');

      // this.loginForm = new FormGroup({
      //   username: new FormControl('', Validators.required),
      //   password: new FormControl('', Validators.required)
      // });
    });
  }

  loginForm = this.lf.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  signupForm = this.sf.group({
    
  });
}